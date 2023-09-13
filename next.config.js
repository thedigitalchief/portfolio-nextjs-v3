/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org', 'cdn.fitolympia.com', 'render.com', 'images.credly.com', 'i.ibb.co', 'static-00.iconduck.com', 'user-images.githubusercontent.com', 'dylanhnguyen.com' ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dylanhnguyen.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
