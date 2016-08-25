/*
 * Copyright (c) 2016, Backstage <http://store.backstage.globoi.com/project/backstage/megadraft-related-articles>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "./src/plugin.js"
  ],
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "megadraft_related_articles.js",
    library: "megadraft_related_articles",
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
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};