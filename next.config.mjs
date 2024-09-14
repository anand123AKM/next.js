/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/serverQuotes/:Quote",
        destination: "/",
        permanent: false,
      },
      {
        source: "/serverQuotes/1",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
