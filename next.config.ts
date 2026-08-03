import type { NextConfig } from "next";

const [githubOwner = "", githubRepo = ""] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = githubRepo.endsWith(".github.io");
const basePath =
  isGitHubPagesBuild && githubRepo && !isUserOrOrgPage
    ? `/${githubRepo}`
    : "";
const githubPagesUrl = githubOwner
  ? isUserOrOrgPage
    ? `https://${githubOwner}.github.io`
    : `https://${githubOwner}.github.io/${githubRepo}`
  : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl,
  },
};

export default nextConfig;
