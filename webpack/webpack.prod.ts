import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import * as path from 'path';
import { webpackCommon } from './webpack.common';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

exports.default = merge<Configuration>(webpackCommon, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: [
					'cache-loader',
					{
						loader: 'ts-loader',
						options: {
							happyPackMode: true,
							transpileOnly: true,
						},
					},
				],
				include: path.resolve(__dirname, '../src'),
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: ['cache-loader', 'html-loader'],
				include: path.resolve(__dirname, '../public'),
			},
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
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].[contenthash].css',
			chunkFilename: 'assets/css/[id].[contenthash].css',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'public/favicon.ico', to: 'assets/img' },
				{ from: 'public/logo192.png', to: 'assets/img' },
				{ from: 'public/logo512.png', to: 'assets/img' },
			],
		}),
		new GenerateSW({
			sourcemap: false,
			swDest: 'service-worker.js',
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		runtimeChunk: true,
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
		minimizer: [
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
				parallel: true,
			}),
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				parallel: true,
				extractComments: false,
			}),
		],
	},
});
