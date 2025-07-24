import { supabase } from '@/integrations/supabase/client';

export interface SessionFingerprint {
  fingerprintHash: string;
  screenResolution: string;
  timezone: string;
  language: string;
  userAgent: string;
}

export class SessionFingerprintManager {
  // Generate a unique browser fingerprint
  static generateFingerprint(): SessionFingerprint {
    const screen = window.screen;
    const nav = window.navigator;
    
    const fingerprint = {
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: nav.language || nav.languages?.[0] || 'en-US',
      userAgent: nav.userAgent,
      platform: nav.platform,
      cookieEnabled: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack,
      hardwareConcurrency: nav.hardwareConcurrency || 0,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth
    };
    
    // Create a hash of the fingerprint data
    const fingerprintString = JSON.stringify(fingerprint);
    const fingerprintHash = this.simpleHash(fingerprintString);
    
    return {
      fingerprintHash,
      screenResolution: fingerprint.screenResolution,
      timezone: fingerprint.timezone,
      language: fingerprint.language,
      userAgent: fingerprint.userAgent
    };
  }
  
  // Simple hash function for fingerprinting
  private static simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }
  
  // Store fingerprint in database
  static async storeFingerprint(
    userId: string,
    sessionId: string,
    fingerprint: SessionFingerprint,
    ipAddress?: string
  ): Promise<void> {
    try {
      const { error } = await supabase.from('session_fingerprints').insert({
        user_id: userId,
        session_id: sessionId,
        fingerprint_hash: fingerprint.fingerprintHash,
        ip_address: ipAddress,
        user_agent: fingerprint.userAgent,
        screen_resolution: fingerprint.screenResolution,
        timezone: fingerprint.timezone,
        language: fingerprint.language,
        is_active: true,
        last_seen: new Date().toISOString()
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Failed to store session fingerprint:', error);
    }
  }
  
  // Update fingerprint activity
  static async updateActivity(
    userId: string,
    sessionId: string,
    fingerprintHash: string
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('session_fingerprints')
        .update({
          last_seen: new Date().toISOString(),
          is_active: true
        })
        .eq('user_id', userId)
        .eq('session_id', sessionId)
        .eq('fingerprint_hash', fingerprintHash);
      
      if (error) throw error;
    } catch (error) {
      console.error('Failed to update fingerprint activity:', error);
    }
  }
  
  // Check for suspicious activity
  static async detectSuspiciousActivity(
    userId: string,
    ipAddress?: string,
    fingerprintHash?: string
  ): Promise<{
    riskScore: number;
    recentLogins: number;
    differentIps: number;
    differentFingerprints: number;
    isSuspicious: boolean;
  }> {
    try {
      const { data, error } = await supabase.rpc('detect_suspicious_activity', {
        p_user_id: userId,
        p_ip_address: ipAddress,
        p_fingerprint_hash: fingerprintHash
      });
      
      if (error) throw error;
      
      const result = data as {
        risk_score: number;
        recent_logins: number;
        different_ips: number;
        different_fingerprints: number;
        is_suspicious: boolean;
      };
      
      return {
        riskScore: result.risk_score,
        recentLogins: result.recent_logins,
        differentIps: result.different_ips,
        differentFingerprints: result.different_fingerprints,
        isSuspicious: result.is_suspicious
      };
    } catch (error) {
      console.error('Failed to detect suspicious activity:', error);
      return {
        riskScore: 0,
        recentLogins: 0,
        differentIps: 0,
        differentFingerprints: 0,
        isSuspicious: false
      };
    }
  }
  
  // Deactivate session fingerprints
  static async deactivateSession(userId: string, sessionId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('session_fingerprints')
        .update({ is_active: false })
        .eq('user_id', userId)
        .eq('session_id', sessionId);
      
      if (error) throw error;
    } catch (error) {
      console.error('Failed to deactivate session fingerprints:', error);
    }
  }
  
  // Get user's current IP address (approximation using external service)
  static async getCurrentIP(): Promise<string | null> {
    try {
      // This is a simple fallback - in production you might want to use a more reliable service
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.warn('Failed to get IP address:', error);
      return null;
    }
  }
}