import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  basePath: "/slagt-pa-oland-mark-iii",
  output: "export",
};

export default nextConfig;
