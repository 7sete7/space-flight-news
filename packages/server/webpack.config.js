var path = require("path");
var webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = () => ({
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: "../../.env",
    }),

    new NodemonPlugin({
      script: "./dist/index.js",
      watch: [path.resolve("./dist")],
      ignore: ["*.js.map"],
      ext: "js,json",
      delay: "1000",
      verbose: true,
      env: {
        NODE_ENV: "development",
      },
    }),
  ],
});
