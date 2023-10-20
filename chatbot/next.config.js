/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['fr', 'es'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig