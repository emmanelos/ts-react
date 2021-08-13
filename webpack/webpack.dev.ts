import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import { webpackCommon }  from './webpack.common';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import  ReactRefreshTypeScript from 'react-refresh-typescript';
import * as webpack from 'webpack';
import * as path from 'path';

// @ts-ignore
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
					getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
				},
					}
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
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		port: 3000,
		hot: true,
		open: {
			app: ['msedge', '--inprivate']
		},
		overlay: {
      warnings: true,
      errors: true,
    },
		stats: {
			all: undefined,
			//@ts-ignore
			groupModulesByAttributes: true,
			logging: 'warn',
			assets: false,
			modulesSpace: 0,
			errors: true,
			builtAt: false,
			colors: true,
		},
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin(),
	]
});