import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/" ? `/${rawBasePath.replace(/^\/|\/$/g, "")}` : "";
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(normalizedBasePath
    ? {
        basePath: normalizedBasePath,
        assetPrefix: `${normalizedBasePath}/`,
      }
    : {}),
};

export default withNextIntl(nextConfig);
