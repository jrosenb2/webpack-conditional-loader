const util = require('util')
const webpack = util.promisify(require('webpack'))
const webpackConfig = require('../webpack.js')

function build() {
  return webpack(webpackConfig)
}

build().catch((error) => console.error(error))