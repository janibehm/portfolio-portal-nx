declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  interface PWAOptions {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    sw?: string;
    runtimeCaching?: unknown[];
    buildExcludes?: RegExp[];
    publicExcludes?: string[];
    fallbacks?: {
      image?: string;
      document?: string;
      font?: string;
      audio?: string;
      video?: string;
    };
  }
  
  function withPWA(options: PWAOptions): (nextConfig: NextConfig) => NextConfig;
  
  export = withPWA;
}
