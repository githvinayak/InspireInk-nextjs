/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "ui-avatars.com"
          },
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          },
          {
            protocol: 'https',
            hostname: "images.unsplash.com"
          },
          {
            protocol: 'https',
            hostname: "www.w3.org"
          }
        ]
      }
}

module.exports = nextConfig
