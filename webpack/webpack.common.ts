import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// import toml from 'toml';
// import yaml from 'yamljs';
// import json5 from 'json5';

export const webpackCommon = {
	entry: './src/index.tsx',
	output: {
		filename: 'assets/js/[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		pathinfo: false,
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		symlinks: false,
		cacheWithContext: false,
		alias: {
			Public: path.resolve(__dirname, '../src/public/'),
			Components: path.resolve(__dirname, '../src/components/'),
			Styles: path.resolve(__dirname, '../src/styles/'),
			Images: path.resolve(__dirname, '../src/img/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico|jp2|webp)$/i,
				type: 'asset/resource',
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
				test: /\.(pdf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/pdf/[name][ext][query]',
				},
			},
			// {
			// 	test: /\.(csv|tsv)$/i,
			// 	use: ['csv-loader'],
			// },
			// {
			// 	test: /\.xml$/i,
			// 	use: ['xml-loader'],
			// },
			// {
			// 	test: /\.toml$/i,
			// 	type: 'json',
			// 	parser: {
			// 		parse: toml.parse,
			// 	},
			// },
			// {
			// 	test: /\.yaml$/i,
			// 	type: 'json',
			// 	parser: {
			// 		parse: yaml.parse,
			// 	},
			// },
			// {
			// 	test: /\.json5$/i,
			// 	type: 'json',
			// 	parser: {
			// 		parse: json5.parse,
			// 	},
			// },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
	],
};