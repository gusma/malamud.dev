module.exports = {
	siteMetadata: {
		title: `New at this, at 36`,
		author: `Gustavo Malamud`,
		description: `Gustavo Malamud is a Front-End Developer slash Digital Marketer from Buenos Aires, Argentina. 🇦🇷 `,
		siteUrl: `https://malamud.dev/`,
		social: {
			twitter: `gusma`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-feed`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-WQKPX65",

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },

				// Specify optional GTM environment details.
				gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
				gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
				dataLayerName: "YOUR_DATA_LAYER_NAME",
			},
		},
	],
};
