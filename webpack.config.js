const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
  
    entry: './index.js',
  
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 4200,
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html',
                filename: 'index.html',
            }),
        new CleanWebpackPlugin(),
     ],

     module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',  
              'css-loader',
            ],
          },
        ]
    }
};
    
module.exports = config;