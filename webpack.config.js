var path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  entry: "./lib/main.js",
  output: {
    path: path.resolve(__dirname),
    filename: "./lib/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devtool: "source-maps",
  resolve: {
    extensions: [".js", "*"]
  }
};
