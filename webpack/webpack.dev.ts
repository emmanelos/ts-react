import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import * as path from 'path';
import { webpackCommon } from './webpack.common';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

exports.default = merge<Configuration>(webpackCommon, {
	mode: 'development',
	devtool: 'eval',
	module: {
		rules: [
			{
				test: /\.(js|tsx|ts|tsx)$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
				include: path.resolve(__dirname, '../src'),
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
				include: path.resolve(__dirname, '../src/styles'),
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 3000,
		hot: true,
		open: true,
		client: {
			overlay: true,
		},
		devMiddleware: {
			stats: {
				all: undefined,
				groupModulesByAttributes: true,
				logging: 'warn',
				assets: false,
				modulesSpace: 0,
				errors: true,
				builtAt: false,
				colors: true,
			},
		},
	},
});
