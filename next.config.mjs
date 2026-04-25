/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: [
    '@boldmind-tech/ui',
    '@boldmind-tech/auth',
    '@boldmind-tech/utils',
    '@boldmind-tech/api-client',
 
  ],

  output: 'standalone',

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.boldmind.ng'       },
      { protocol: 'https', hostname: '**.amebogist.ng'      },
      { protocol: 'https', hostname: '**.educenter.com.ng'  },
      { protocol: 'https', hostname: 'res.cloudinary.com'   },
      { protocol: 'https', hostname: '**.vercel.app'        },
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com'   },
    ],
  },

  experimental: {
    externalDir: true,
  },

  webpack: (config) => {
    config.resolve.symlinks = true;
    return config;
  },
};

export default nextConfig;
