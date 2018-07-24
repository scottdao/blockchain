const path = require('path');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	 entry: {blockchain:'./src/index.js'},
	 output: {
	    filename: '[name].min.js',
	    path: path.resolve(__dirname, 'dist')
	 },
	 devServer:{
	 	  	 contentBase: './dist',
		     hot: true,
		     port: 3000,
		     host: '192.168.1.29'
			 },
	 plugins: [
		 new HtmlWebpackPlugin({
				template: __dirname + '/src/index.html'
			}),
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	 ]
	 
};