/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

var webpack = require("webpack")

module.exports = {
  entry: [
    "."
  ],
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  output: {
    path: __dirname + "./dist",
    publicPath: "/dist/",
    filename: "related-articles-plugin.js",
    library: "related-articles-plugin",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  }
};
