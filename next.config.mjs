/** @type {import('next').NextConfig} */

// GitHub Pages serves this project at https://<user>.github.io/<repo>/, so the
// production build needs a basePath. Local `next dev` stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "indigo-counseling-wellness";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export → deployable to any static host
  trailingSlash: true, // emit /about/index.html so GitHub Pages routes resolve
  images: { unoptimized: true }, // required: no Image Optimization server on Pages
  basePath: isProd ? `/${repo}` : undefined,
};

export default nextConfig;
