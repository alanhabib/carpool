module.exports = {
	entry: "./index.js",
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name:"[name].[hash].[ext]",
							outputPath: "imgs"
						}
					},
				],
			},
		]
	}
};
