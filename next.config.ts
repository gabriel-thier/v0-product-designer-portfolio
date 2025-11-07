import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES ? "/product-portfolio" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "/product-portfolio/" : "",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
