import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Set output to 'export' for GitHub Pages */
  output: 'export',
  
  /* Disable image optimization since GitHub Pages is a static host */
  images: {
    unoptimized: true,
  },

  /* If your repo name is NOT BhatAnkush.github.io (e.g. it's a sub-project), 
     you would need 'basePath'. But for your main site, this is usually not needed. */
};

export default nextConfig;