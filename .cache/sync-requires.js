const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/success.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("/Users/lint/Web/malamud-dev-3/src/pages/uses.js")))
}

