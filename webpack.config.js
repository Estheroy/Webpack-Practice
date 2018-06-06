const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), // Note: need a absolute path here
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/ // file ends with .js
			},
			{
				// use: ['style-loader', 'css-loader'],
				loader: ExtractTextPlugin.extract({
					use: 'css-loader'
				}),
				test: /\.css$/ // file ends with .css
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css') // bundle all the css together to file style.css
	]
};

module.exports = config;