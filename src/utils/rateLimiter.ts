interface RateLimit {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private limits: Map<string, RateLimit> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const limit = this.limits.get(identifier);

    if (!limit) {
      return false;
    }

    // Reset if window has passed
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

    // Reset if window has passed
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

// Global rate limiters for different operations
export const loginRateLimiter = new RateLimiter(5, 15 * 60 * 1000); // 5 attempts per 15 minutes
export const signupRateLimiter = new RateLimiter(3, 60 * 60 * 1000); // 3 attempts per hour
export const generalRateLimiter = new RateLimiter(10, 60 * 1000); // 10 attempts per minute

export { RateLimiter };