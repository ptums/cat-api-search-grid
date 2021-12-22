module.exports = {
  images: {
    domains: ['cdn2.thecatapi.com'],
    minimumCacheTTL: 18000,
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  env: {
    NEXT_PUBLIC_CAT_API_KEY: process.env.NEXT_PUBLIC_CAT_API_KEY
  },
}