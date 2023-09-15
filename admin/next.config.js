const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

module.exports = withPlugins([
	[withSvgr],
	{
        publicRuntimeConfig: {
            apiUrl: process.env.PUBLIC_HOST
        },
		reactStrictMode: true,
		swcMinify: true,
		images: {
			domains: ['lh3.googleusercontent.com']
		}
	}
])
