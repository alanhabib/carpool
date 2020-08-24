const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {index: path.resolve(__dirname, "index.js")},
	devServer: {
		historyApiFallback: true
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.[contentHash].js",
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",   // Turns CSS into JS
					"sass-loader"   // Turns SCSS into CSS
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "images"
						}
					},
				],
			},
		]
	},
	optimization: {
		splitChunks: {chunks: "all"}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin()
	]
};
