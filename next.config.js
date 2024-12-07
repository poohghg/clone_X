//next.config.js
const stylexPlugin = require('@stylexjs/nextjs-plugin')
const path = require('path')

const nextConfig = {
	experimental: {
		serverActions: {
			allowedOrigins: ['localhost:3000'],
		},
		serverComponentsExternalPackages: ['pino'],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		},
	},
}

module.exports = stylexPlugin({
	rootDir: __dirname,
})(nextConfig)
