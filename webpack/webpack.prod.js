const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// Creates separate CSS files
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new GenerateSW({
			sourcemap: false,
			swDest: 'service-worker.js',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
});
