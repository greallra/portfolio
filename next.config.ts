import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/portfolio"); empty on Vercel or a custom domain.
const basePath = process.env.PAGES_BASE_PATH ?? "";

// Static export: deployable to any free static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
