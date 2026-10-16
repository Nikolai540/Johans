import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Gleiche URLs wie die bisherige Website (z. B. /entkernung-abbruch-rueckbau/)
  trailingSlash: true,
  // Entwicklungsserver auch im Heimnetz erreichbar (Handy-Test über die Network-Adresse)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "*.local"],
  images: {
    formats: ["image/webp"],
    qualities: [70, 80],
  },
};

export default nextConfig;
