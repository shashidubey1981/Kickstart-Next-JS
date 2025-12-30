import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { initializePersonalizeSDK } from '@/lib/contentstack/config/personalization'

export async function middleware(request: NextRequest) {
  let sdk: any = null;
    let variantParam: string | null = null;
    
    try {
        sdk = await initializePersonalizeSDK(request as any);
        if (sdk) {
            variantParam = sdk.getVariantParam();
        }
    } catch (error) {
        console.error('Failed to initialize personalization SDK:', error);
        // Continue without personalization if SDK initialization fails
    }
  // Create response
  const response = NextResponse.next();

  // Store variant aliases in request headers for use in server components
  // Convert array to comma-separated string for header storage
  

  // Store active experiences in headers if needed
  
  if (sdk) {
    await sdk.addStateToResponse(response as any);
  }
  return response;
}

// Configure which routes should run the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

