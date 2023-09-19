/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "m.economictimes.com",
      "www.dainiknepal.news",
      "t4.ftcdn.net",
      "www.ifpri.org",
      "www.arabnews.pk",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
