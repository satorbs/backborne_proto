var webpack = require('webpack');
 
module.exports = {
    context: __dirname,
  entry: {
    app: ["./src/js/index.js"]
  },
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  node: {
  fs: "empty"
},
  plugins: [
    new webpack.ProvidePlugin(
      {
        jQuery: "jquery",
        $: "jquery",
        _: "underscore",
        Backbone: "backbone",
        Marionette: "backbone.marionette"
      }
    ),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })*/
  ]
};