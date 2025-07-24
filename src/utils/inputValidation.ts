// Enhanced input validation and sanitization utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedValue?: string;
}

export class InputValidator {
  // Email validation with enhanced security checks
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    const sanitized = email.trim().toLowerCase();
    
    // Basic format check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitized)) {
      errors.push('Invalid email format');
    }
    
    // Check for suspicious patterns
    if (sanitized.includes('..')) {
      errors.push('Invalid email format');
    }
    
    // Check length limits
    if (sanitized.length > 254) {
      errors.push('Email address too long');
    }
    
    // Check for known disposable email domains (basic list)
    const disposableDomains = ['10minutemail.com', 'guerrillamail.com', 'tempmail.org'];
    const domain = sanitized.split('@')[1];
    if (disposableDomains.includes(domain)) {
      errors.push('Disposable email addresses are not allowed');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitized
    };
  }
  
  // Password validation with enhanced security requirements
  static validatePassword(password: string): ValidationResult {
    const errors: string[] = [];
    
    if (password.length < 12) {
      errors.push('Password must be at least 12 characters long');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    // Check for common patterns
    if (/(.)\1{2,}/.test(password)) {
      errors.push('Password cannot contain repeated characters');
    }
    
    if (/123|abc|qwe/i.test(password)) {
      errors.push('Password cannot contain common sequences');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  // Name validation with XSS protection
  static validateName(name: string): ValidationResult {
    const errors: string[] = [];
    const sanitized = this.sanitizeText(name.trim());
    
    if (sanitized.length < 1) {
      errors.push('Name is required');
    }
    
    if (sanitized.length > 100) {
      errors.push('Name is too long');
    }
    
    // Only allow letters, spaces, hyphens, and apostrophes
    if (!/^[a-zA-Z\s\-']+$/.test(sanitized)) {
      errors.push('Name can only contain letters, spaces, hyphens, and apostrophes');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitized
    };
  }
  
  // Phone number validation
  static validatePhoneNumber(phone: string): ValidationResult {
    const errors: string[] = [];
    const sanitized = phone.replace(/\D/g, ''); // Remove all non-digits
    
    if (sanitized.length < 10 || sanitized.length > 15) {
      errors.push('Phone number must be between 10-15 digits');
    }
    
    // US phone number format validation
    if (sanitized.length === 10 || (sanitized.length === 11 && sanitized.startsWith('1'))) {
      // Valid US number
    } else {
      errors.push('Invalid phone number format');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitized
    };
  }
  
  // Text sanitization to prevent XSS
  static sanitizeText(text: string): string {
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/\\/g, '&#x5C;')
      .trim();
  }
  
  // HTML content sanitization (for rich text)
  static sanitizeHtml(html: string): string {
    // Remove script tags and their content
    let sanitized = html.replace(/<script[^>]*>.*?<\/script>/gi, '');
    
    // Remove dangerous attributes
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/\s*javascript\s*:/gi, '');
    sanitized = sanitized.replace(/\s*data\s*:/gi, '');
    
    // Remove style attributes that could contain dangerous CSS
    sanitized = sanitized.replace(/\s*style\s*=\s*["'][^"']*["']/gi, '');
    
    return sanitized;
  }
  
  // URL validation
  static validateUrl(url: string): ValidationResult {
    const errors: string[] = [];
    
    try {
      const urlObj = new URL(url);
      
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        errors.push('Only HTTP and HTTPS URLs are allowed');
      }
      
      // Check for suspicious domains
      const suspiciousDomains = ['localhost', '127.0.0.1', '0.0.0.0'];
      if (suspiciousDomains.some(domain => urlObj.hostname.includes(domain))) {
        errors.push('Local URLs are not allowed');
      }
      
    } catch (e) {
      errors.push('Invalid URL format');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: url
    };
  }
  
  // Social Security Number validation (last 4 digits)
  static validateSSNLast4(ssn: string): ValidationResult {
    const errors: string[] = [];
    const sanitized = ssn.replace(/\D/g, '');
    
    if (sanitized.length !== 4) {
      errors.push('SSN last 4 digits must be exactly 4 numbers');
    }
    
    if (sanitized === '0000') {
      errors.push('Invalid SSN format');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitized
    };
  }
  
  // File validation
  static validateFile(file: File, allowedTypes: string[], maxSizeMB: number = 10): ValidationResult {
    const errors: string[] = [];
    
    // Check file type
    if (!allowedTypes.includes(file.type)) {
      errors.push(`File type ${file.type} is not allowed. Allowed types: ${allowedTypes.join(', ')}`);
    }
    
    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      errors.push(`File size exceeds ${maxSizeMB}MB limit`);
    }
    
    // Check for suspicious file names
    if (/\.(exe|bat|cmd|com|pif|scr|vbs|js|jar|app|deb|pkg|dmg)$/i.test(file.name)) {
      errors.push('Executable files are not allowed');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  // Generic text field validation
  static validateTextField(text: string, minLength: number = 0, maxLength: number = 1000): ValidationResult {
    const errors: string[] = [];
    const sanitized = this.sanitizeText(text);
    
    if (sanitized.length < minLength) {
      errors.push(`Text must be at least ${minLength} characters long`);
    }
    
    if (sanitized.length > maxLength) {
      errors.push(`Text cannot exceed ${maxLength} characters`);
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: sanitized
    };
  }
  
  // Date validation
  static validateDate(dateString: string): ValidationResult {
    const errors: string[] = [];
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      errors.push('Invalid date format');
    }
    
    // Check if date is in reasonable range (not too far in past or future)
    const now = new Date();
    const hundredYearsAgo = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
    const tenYearsFromNow = new Date(now.getFullYear() + 10, now.getMonth(), now.getDate());
    
    if (date < hundredYearsAgo) {
      errors.push('Date cannot be more than 100 years in the past');
    }
    
    if (date > tenYearsFromNow) {
      errors.push('Date cannot be more than 10 years in the future');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: dateString
    };
  }
}

// Rate limiting for form submissions
export class FormRateLimiter {
  private static submissions = new Map<string, number[]>();
  
  static checkSubmissionRate(formId: string, maxSubmissions: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const submissions = this.submissions.get(formId) || [];
    
    // Remove old submissions outside the window
    const recentSubmissions = submissions.filter(time => now - time < windowMs);
    
    // Check if rate limit exceeded
    if (recentSubmissions.length >= maxSubmissions) {
      return false;
    }
    
    // Record this submission
    recentSubmissions.push(now);
    this.submissions.set(formId, recentSubmissions);
    
    return true;
  }
  
  static resetSubmissions(formId: string): void {
    this.submissions.delete(formId);
  }
}