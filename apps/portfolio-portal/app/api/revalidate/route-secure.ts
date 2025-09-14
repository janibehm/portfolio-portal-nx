import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';
import { rateLimit, getClientIP } from './rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = rateLimit(clientIP, 3, 60000); // 3 requests per minute
    
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ 
        error: 'Rate limit exceeded',
        retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
      }, { status: 429 });
    }
    
    // Check for secret key
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const authHeader = request.headers.get('authorization');
    
    // Auth methods
    const expectedSecret = process.env.REVALIDATION_SECRET || 'dev-secret-key';
    const isValidSecret = secret === expectedSecret;
    const isValidHeader = authHeader === `Bearer ${expectedSecret}`;
    
    if (!isValidSecret && !isValidHeader) {
      return NextResponse.json({ 
        error: 'Unauthorized' 
      }, { status: 401 });
    }

    // Log the revalidation attempt (for monitoring)
    console.log(`Revalidation triggered by IP: ${clientIP} at ${new Date().toISOString()}`);
   
    revalidatePath('/');
    revalidateTag('projects');
    
    return NextResponse.json({ 
      success: true,
      timestamp: new Date().toISOString(),
      remaining: rateLimitResult.remaining
    });
    
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ 
      error: 'Internal server error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    error: 'Method not allowed. Use POST with proper authentication.' 
  }, { status: 405 });
}