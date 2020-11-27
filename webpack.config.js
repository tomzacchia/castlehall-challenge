// var path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = () => {
  //https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/main.js",
    watch: true,
    output: {
      path: __dirname,
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      // new HtmlWebpackPlugin({
      //   template: "./dist/index.html",
      // }),
    ],
    devServer: {
      contentBase: "./dist",
      overlay: true,
      // historyApiFallback: true,
    },
  };
};

module.exports = config;
