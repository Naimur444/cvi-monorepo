/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper build optimization
  compress: true,
  poweredByHeader: false,
  
  // Generate unique build id for proper cache busting
  generateBuildId: async () => {
    // Use timestamp + random string for unique build IDs to prevent chunk mismatches
    return `build-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Ensure proper asset optimization
  experimental: {
    optimizeCss: false, // Disable to avoid critters dependency issue
  },
};

export default nextConfig;
