/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['fr', 'en-US', 'es-ES'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig