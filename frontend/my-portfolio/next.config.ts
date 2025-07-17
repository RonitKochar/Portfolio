import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: isProd ? '/<your-repo>/' : '',
  basePath: isProd ? '/<your-repo>' : '',
  output: 'export',
}

export default nextConfig;
