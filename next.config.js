/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
}

module.exports = nextConfig
