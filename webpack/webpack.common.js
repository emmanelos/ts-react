const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'assets/js/[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@public': path.resolve(__dirname, 'public'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@styles': path.resolve(__dirname, 'src/styles'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource',
				exclude: [
					path.resolve(__dirname, 'public/favicon.ico'),
					path.resolve(__dirname, 'public/logo192.png'),
					path.resolve(__dirname, 'public/logo512.png'),
				],
				generator: {
					filename: 'assets/img/[name][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/font/[hash][name][ext][query]',
				},
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].[contenthash].css',
			chunkFilename: 'assets/css/[id].[contenthash].css',
		}),
		new CopyPlugin({
			patterns: [{ from: 'public/favicon.ico', to: 'assets/img' }],
			patterns: [{ from: 'public/logo192.png', to: 'assets/img' }],
			patterns: [{ from: 'public/logo512.png', to: 'assets/img' }],
		}),
	],
};
