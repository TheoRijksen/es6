"use strict";

const path 						= require('path');
const HtmlWebPackPlugin 		= require("html-webpack-plugin");
const MiniCssExtractPlugin 		= require("mini-css-extract-plugin");

module.exports = {
	devtool: 'inline-source-map',
	entry: ['./src/js/app.js', './src/css/main.css' ],
	output: {
		filename: './dist/js/app.js',
		path: path.resolve(__dirname)
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};