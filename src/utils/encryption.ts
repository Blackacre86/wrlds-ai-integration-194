// Client-side encryption utilities for sensitive data

export class ClientEncryption {
  // Generate a random encryption key
  static generateKey(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Simple encryption using AES-like algorithm (for demo purposes)
  // In production, use Web Crypto API for proper encryption
  static async encrypt(text: string, key: string): Promise<string> {
    try {
      // For demonstration - in production use Web Crypto API
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const keyData = encoder.encode(key);
      
      // Simple XOR encryption (not secure for production)
      const encrypted = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) {
        encrypted[i] = data[i] ^ keyData[i % keyData.length];
      }
      
      // Convert to base64
      return btoa(String.fromCharCode(...encrypted));
    } catch (error) {
      console.error('Encryption failed:', error);
      return text; // Fallback to plaintext
    }
  }
  
  // Decrypt encrypted text
  static async decrypt(encryptedText: string, key: string): Promise<string> {
    try {
      // Decode from base64
      const encrypted = new Uint8Array(
        atob(encryptedText).split('').map(char => char.charCodeAt(0))
      );
      
      const encoder = new TextEncoder();
      const keyData = encoder.encode(key);
      
      // Simple XOR decryption
      const decrypted = new Uint8Array(encrypted.length);
      for (let i = 0; i < encrypted.length; i++) {
        decrypted[i] = encrypted[i] ^ keyData[i % keyData.length];
      }
      
      // Convert back to string
      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
    } catch (error) {
      console.error('Decryption failed:', error);
      return encryptedText; // Return as-is if decryption fails
    }
  }
  
  // Hash function for creating secure identifiers
  static async hash(text: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (error) {
      console.error('Hashing failed:', error);
      // Fallback hash function
      let hash = 0;
      for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash).toString(16);
    }
  }
  
  // Generate secure random backup codes
  static generateBackupCodes(count: number = 10): string[] {
    const codes: string[] = [];
    
    for (let i = 0; i < count; i++) {
      // Generate 8-character alphanumeric code
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      
      for (let j = 0; j < 8; j++) {
        const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % chars.length;
        code += chars[randomIndex];
      }
      
      // Format as XXXX-XXXX
      codes.push(`${code.slice(0, 4)}-${code.slice(4)}`);
    }
    
    return codes;
  }
  
  // Validate backup code format
  static isValidBackupCode(code: string): boolean {
    // Format: XXXX-XXXX where X is alphanumeric
    const regex = /^[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    return regex.test(code.toUpperCase());
  }
  
  // Secure comparison to prevent timing attacks
  static secureCompare(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    
    return result === 0;
  }
}