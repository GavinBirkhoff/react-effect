/**
 * This is the entry file for `npm run dist`
 */

/**
 * build for `dist/react-pearls.css`
 */
const req = require.context("./components", true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/)
req.keys().forEach(mod => {
  req(mod)
})

/**
 * build for `dist/react-pearls.js`
 */
module.exports = require("./components/index")
