/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.wixstatic.com','plus.unsplash.com', 'images.unsplash.com','via.placeholder.com'],
    // Alternatively, you can use remotePatterns for more control
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'static.wixstatic.com',
    //     pathname: '**',
    //   },
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
};

export default nextConfig;