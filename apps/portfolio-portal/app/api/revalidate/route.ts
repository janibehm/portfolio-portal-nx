import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Check for secret key in query parameters
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Validate secret (use environment variable in production)
    const expectedSecret = process.env.REVALIDATION_SECRET || 'dev-secret-key';
    
    if (secret !== expectedSecret) {
      return NextResponse.json({ 
        error: 'Unauthorized' 
      }, { status: 401 });
    }
   
    revalidatePath('/');
    revalidateTag('projects');
    
    return NextResponse.json({ 
      revalidated: true, 
      timestamp: new Date().toISOString() 
    });
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET endpoint for testing
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const expectedSecret = process.env.REVALIDATION_SECRET || 'dev-secret-key';
  
  if (secret !== expectedSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return NextResponse.json({ 
    message: 'Revalidation endpoint ready. Use POST to trigger revalidation.' 
  });
}