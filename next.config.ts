import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES ? "/v0-product-designer-portfolio" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "/v0-product-designer-portfolio/" : "",
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
  trailingSlash: true,
}

export default nextConfig
