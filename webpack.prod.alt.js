const merge = require("webpack-merge");
const common = require("./webpack.common");
const prod = require("./webpack.prod");

// smartStrategy is needed so we can replace certain webpack item. In this case: optimization.
// optimization in webpack.common.js will be replaced with optimization in this webpack.prod.alt.js.
// This config will produce production build with source-map emitted add put to it reference in the bundle
module.exports = merge.smartStrategy({
  devtool: "replace"
})(common, prod, {
  // A full SourceMap is emitted as a separate file.
  // It adds a reference comment to the bundle so development tools know where to find it.
  // Useful if we need to inspect bundle using source-map-explorer (NPM package)
  devtool: "source-map"
});
