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
		'gatsby-plugin-dark-mode',
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
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
						  // Class prefix for <pre> tags containing syntax highlighting;
						  // defaults to 'language-' (e.g. <pre class="language-js">).
						  // If your site loads Prism into the browser at runtime,
						  // (e.g. for use with libraries like react-live),
						  // you may use this to prevent Prism from re-processing syntax.
						  // This is an uncommon use-case though;
						  // If you're unsure, it's best to use the default value.
						  classPrefix: "language-",
						  // This is used to allow setting a language for inline code
						  // (i.e. single backticks) by creating a separator.
						  // This separator is a string and will do no white-space
						  // stripping.
						  // A suggested value for English speakers is the non-ascii
						  // character '›'.
						  inlineCodeMarker: null,
						  // This lets you set up language aliases.  For example,
						  // setting this to '{ sh: "bash" }' will let you use
						  // the language "sh" which will highlight using the
						  // bash highlighter.
						  aliases: {},
						  // This toggles the display of line numbers globally alongside the code.
						  // To use it, add the following line in gatsby-browser.js
						  // right after importing the prism color scheme:
						  //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
						  // Defaults to false.
						  // If you wish to only show line numbers on certain code blocks,
						  // leave false and use the {numberLines: true} syntax below
						  showLineNumbers: true,
						  // If setting this to true, the parser won't handle and highlight inline
						  // code used in markdown i.e. single backtick code like `this`.
						  noInlineHighlight: false,
						  // This adds a new language definition to Prism or extend an already
						  // existing language definition. More details on this option can be
						  // found under the header "Add new language definition or extend an
						  // existing language" below.
						  languageExtensions: [
							{
							  language: "superscript",
							  extend: "javascript",
							  definition: {
								superscript_types: /(SuperType)/,
							  },
							  insertBefore: {
								function: {
								  superscript_keywords: /(superif|superelse)/,
								},
							  },
							},
						  ],
						  // Customize the prompt used in shell output
						  // Values below are default
						  prompt: {
							user: "root",
							host: "localhost",
							global: false,
						  },
						  // By default the HTML entities <>&'" are escaped.
						  // Add additional HTML escapes by providing a mapping
						  // of HTML entities and their escape value IE: { '}': '&#123;' }
						  escapeEntities: {},
						},
					},					
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
			  // The property ID; the tracking code won't be generated without it
			  trackingId: "G-GL9K1604D6",
			  // Defines where to place the tracking script - `true` in the head and `false` in the body
			  head: false,
			  // Setting this parameter is optional
			  anonymize: true,
			  // Setting this parameter is also optional
			  respectDNT: true,
			  // Avoids sending pageview hits from custom paths
			  exclude: ["/preview/**", "/do-not-track/me/too/"],
			  // Delays sending pageview hits on route update (in milliseconds)
			  pageTransitionDelay: 0,
			  // Enables Google Optimize using your container Id
			  optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
			  // Enables Google Optimize Experiment ID
			  experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
			  // Set Variation ID. 0 for original 1,2,3....
			  variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
			  // Defers execution of google analytics script after page load
			  defer: false,
			  // Any additional optional fields
			  sampleRate: 5,
			  siteSpeedSampleRate: 10,
			  cookieDomain: "malamud.dev",
			  // defaults to false
			  enableWebVitalsTracking: true,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
			  query: `
				{
				  site {
					siteMetadata {
					  title
					  description
					  siteUrl
					  site_url: siteUrl
					}
				  }
				}
			  `,
			  feeds: [
				{
				  serialize: ({ query: { site, allMarkdownRemark } }) => {
					return allMarkdownRemark.nodes.map(node => {
					  return Object.assign({}, node.frontmatter, {
						description: node.excerpt,
						date: node.frontmatter.date,
						url: site.siteMetadata.siteUrl + node.fields.slug,
						guid: site.siteMetadata.siteUrl + node.fields.slug,
						custom_elements: [{ "content:encoded": node.html }],
					  })
					})
				  },
				  query: `
					{
					  allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] },
					  ) {
						nodes {
						  excerpt
						  html
						  fields { 
							slug 
						  }
						  frontmatter {
							title
							date
						  }
						}
					  }
					}
				  `,
				  output: "/rss.xml",
				  title: "Your Site's RSS Feed",
				  // optional configuration to insert feed reference in pages:
				  // if `string` is used, it will be used to create RegExp and then test if pathname of
				  // current page satisfied this regular expression;
				  // if not provided or `undefined`, all pages will have feed reference inserted
				  match: "^/blog/",
				  // optional configuration to specify external rss feed, such as feedburner
				  link: "https://feeds.feedburner.com/gatsby/blog",
				},
			  ],
			},
		  },		
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
