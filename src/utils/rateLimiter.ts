import { supabase } from '@/integrations/supabase/client';

interface RateLimit {
  count: number;
  resetTime: number;
}

// Enhanced rate limiter with database-backed persistent storage
class EnhancedRateLimiter {
  private limits: Map<string, RateLimit> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  // Client-side fallback rate limiting (for immediate feedback)
  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const limit = this.limits.get(identifier);

    if (!limit) {
      return false;
    }

    if (now > limit.resetTime) {
      this.limits.delete(identifier);
      return false;
    }

    return limit.count >= this.maxAttempts;
  }

  recordAttempt(identifier: string): boolean {
    const now = Date.now();
    const limit = this.limits.get(identifier);

    if (!limit) {
      this.limits.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return false;
    }

    if (now > limit.resetTime) {
      this.limits.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return false;
    }

    limit.count += 1;
    this.limits.set(identifier, limit);

    return limit.count >= this.maxAttempts;
  }

  getRemainingTime(identifier: string): number {
    const limit = this.limits.get(identifier);
    if (!limit) return 0;

    const now = Date.now();
    return Math.max(0, limit.resetTime - now);
  }

  reset(identifier: string): void {
    this.limits.delete(identifier);
  }
}

// Database-backed rate limiting functions
export class DatabaseRateLimiter {
  static async checkRateLimit(
    identifier: string,
    actionType: string,
    ipAddress?: string,
    maxAttempts: number = 5,
    windowMinutes: number = 15
  ): Promise<{
    isLimited: boolean;
    attemptsUsed: number;
    maxAttempts: number;
    timeRemainingSeconds: number;
    windowMinutes: number;
  }> {
    try {
      const { data, error } = await supabase.rpc('check_rate_limit', {
        p_identifier: identifier,
        p_ip_address: ipAddress,
        p_action_type: actionType,
        p_max_attempts: maxAttempts,
        p_window_minutes: windowMinutes
      });

      if (error) throw error;
      return data as {
        isLimited: boolean;
        attemptsUsed: number;
        maxAttempts: number;
        timeRemainingSeconds: number;
        windowMinutes: number;
      };
    } catch (error) {
      console.error('Rate limit check failed:', error);
      // Fallback to permissive behavior on error
      return {
        isLimited: false,
        attemptsUsed: 0,
        maxAttempts,
        timeRemainingSeconds: 0,
        windowMinutes
      };
    }
  }

  static async recordAttempt(
    identifier: string,
    actionType: string,
    ipAddress?: string,
    maxAttempts: number = 5,
    windowMinutes: number = 15,
    lockoutMinutes: number = 30
  ): Promise<{
    attemptsUsed: number;
    maxAttempts: number;
    isLocked: boolean;
    lockedUntil?: string;
  }> {
    try {
      const { data, error } = await supabase.rpc('record_rate_limit_attempt', {
        p_identifier: identifier,
        p_ip_address: ipAddress,
        p_action_type: actionType,
        p_max_attempts: maxAttempts,
        p_window_minutes: windowMinutes,
        p_lockout_minutes: lockoutMinutes
      });

      if (error) throw error;
      return data as {
        attemptsUsed: number;
        maxAttempts: number;
        isLocked: boolean;
        lockedUntil?: string;
      };
    } catch (error) {
      console.error('Rate limit recording failed:', error);
      return {
        attemptsUsed: 1,
        maxAttempts,
        isLocked: false
      };
    }
  }

  static async resetRateLimit(
    identifier: string,
    actionType: string,
    ipAddress?: string
  ): Promise<void> {
    try {
      const { error } = await supabase.rpc('reset_rate_limit', {
        p_identifier: identifier,
        p_ip_address: ipAddress,
        p_action_type: actionType
      });

      if (error) throw error;
    } catch (error) {
      console.error('Rate limit reset failed:', error);
    }
  }
}

// Global rate limiters for different operations
export const loginRateLimiter = new EnhancedRateLimiter(5, 15 * 60 * 1000); // 5 attempts per 15 minutes
export const signupRateLimiter = new EnhancedRateLimiter(3, 60 * 60 * 1000); // 3 attempts per hour
export const generalRateLimiter = new EnhancedRateLimiter(10, 60 * 1000); // 10 attempts per minute

export { EnhancedRateLimiter as RateLimiter };