/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
      {
        protocol: "https",
        hostname: "misikemenceje.cdn.shoprenter.hu",
      },
      {
        protocol: "https",
        hostname: "production.streetkitchen-cdn.com",
      },
      {
        protocol: "https",
        hostname: "kisparadicsom.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "media02.stockfood.com",
      },
      {
        protocol: "https",
        hostname: "lapizzanostra.hu",
      },
      {
        protocol: "https",
        hostname: "banditosgyongyos.hu",
      },
      {
        protocol: "https",
        hostname: "parmacrown.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mindmegette.hu",
      },
      {
        protocol: "https",
        hostname: "kep.cdn.indexvas.hu",
      },
    ],
  },
};

export default nextConfig;
