import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: 'standalone',
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
}

export default nextConfig
