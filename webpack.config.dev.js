const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", //To serve source code while debugging in the browser
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"), // Not required in the DEV mode
    publicPath: "/",
    filename: "bundle.js" // Minified file name
  },
  devServer: {
    stats: "minimal", // Less noise on commandline
    overlay: true, // Overlay errors that occur in browser
    historyApiFallback: true, // All requests sent to index.html
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
