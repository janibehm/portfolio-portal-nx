import type { NextConfig } from "next";
import { withNx } from "@nx/next/plugins/with-nx"; 

const nextConfig: NextConfig = withNx({
  output: "standalone", 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
