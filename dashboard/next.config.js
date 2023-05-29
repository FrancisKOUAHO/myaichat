/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    experimental: {
        appDir: true,
    },
    distDir: 'build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
