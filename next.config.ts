import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ["src/styles"],
    // ref. https://github.com/vercel/next.js/issues/71638
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
