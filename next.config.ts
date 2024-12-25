import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'fakestoreapi.com'
      },
      {
        protocol:'https',
        hostname:'www.amhttps'
      }
    ]
  }
};

export default nextConfig;
