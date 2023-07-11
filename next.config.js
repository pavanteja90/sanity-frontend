/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            }
        ],
        domains: [
            "www.canstarblue.com.au",
            "cdn.canstarblue.com.au",
            "localhost"
        ]
    }
}

module.exports = nextConfig
