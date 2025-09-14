// Rate limiting implementation
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(ip: string, maxRequests = 5, windowMs = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get or create rate limit data for this IP
  let rateLimitData = rateLimitMap.get(ip);
  
  if (!rateLimitData || rateLimitData.resetTime < windowStart) {
    // Reset or create new rate limit data
    rateLimitData = { count: 0, resetTime: now + windowMs };
    rateLimitMap.set(ip, rateLimitData);
  }
  
  rateLimitData.count++;
  
  // Clean up old entries
  for (const [key, data] of rateLimitMap.entries()) {
    if (data.resetTime < now) {
      rateLimitMap.delete(key);
    }
  }
  
  return {
    allowed: rateLimitData.count <= maxRequests,
    remaining: Math.max(0, maxRequests - rateLimitData.count),
    resetTime: rateLimitData.resetTime
  };
}

export function getClientIP(request: Request): string {
  // Get client IP from various headers (for different hosting providers)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const clientIp = request.headers.get('x-client-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  return realIp || clientIp || 'unknown';
}