//next.config.js
import { NextConfig } from 'next'

const path = require('path')

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: ['localhost:3000'],
		},
	},
	serverComponentsExternalPackages: ['pino'],
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
