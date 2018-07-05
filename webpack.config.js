const path = require('path');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	 //mode:'development',
	 entry: {bit:'./src/index.js'},
	 output: {
	    filename: '[name].min.js',
	    path: path.resolve(__dirname, 'dist'),
	    //libraryTarget:'commonjs2'
	 },
	 devServer:{
	 	  	 contentBase: './dist',
		     hot: true,
		     port: 8080,
//		     inline: true,
		     host: '192.168.1.26'
			 },
	 plugins: [
		 new HtmlWebpackPlugin({
				template: __dirname + '/src/index.html'
			}),
			new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	 ]
	 
};