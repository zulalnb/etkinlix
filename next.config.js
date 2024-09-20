/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack", // Use svgr to convert SVG to React component
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig;
