const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'

const devtool = devMode ? 'source-map' : undefined

module.exports = {
	mode: mode,
	devtool: devtool,
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.[contenthash].js',
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'main.[contenthash].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env']
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|ttf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	}

}
















// let mode = 'development'
// if (process.env.NODE_ENV === 'production') {
// 	mode = 'production'
// }

// module.exports = {
// 	mode: mode,
// 	output: {
// 		filename: '[name].[contenthash].js',
// 		assetModuleFilename: 'assets/[hash][ext][query]',
// 		clean: true
// 	},
// 	devtool: 'source-map',
// 	optimization: {
// 		splitChunks: {
// 			chunks: 'all',
// 		}
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: './src/index.html'
// 		}),
// 		new MiniCssExtractPlugin({
// 			filename: '[name].[contenthash].css'
// 		})
// 	],
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(sa|sc|c)ss$/i,
// 				use: [
// 					(mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
// 					'css-loader',
// 					'postcss-loader',
// 					'sass-loader'
// 				]
// 			},
// 			{
// 				test: /\.(png|svg|jpg|jpeg|gif)$/i,
// 				type: 'asset/resource'
// 			},
// 			{
// 				test: /\.html$/i,
// 				loader: 'html-loader'
// 			},
// 			{
// 				test: /\.(woff|woff2|ttf|otf)$/i,
// 				type: 'asset/resource'
// 			}
// 		]
// 	}
// }