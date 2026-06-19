/** @type {import('next').NextConfig} */

// basePath is ONLY needed for the GitHub Pages project URL (served at /<repo>/).
// It is enabled only when GITHUB_PAGES=true (set by deploy.sh). On Vercel — where
// the site is served at the root of the custom domain — leave it OFF, so assets
// and links resolve from "/". Local `next dev` also stays at the root.
const ghPages = process.env.GITHUB_PAGES === "true";
const repo = "indigo-counseling-wellness";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export → deployable to any static host
  trailingSlash: true, // emit /about/index.html so routes resolve as directories
  images: { unoptimized: true }, // no Image Optimization server on static hosts
  basePath: ghPages ? `/${repo}` : undefined,
};

export default nextConfig;
