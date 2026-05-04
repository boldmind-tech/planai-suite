/** @type {import('next').NextConfig} */

const nextConfig = {

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

 
};

export default nextConfig;
