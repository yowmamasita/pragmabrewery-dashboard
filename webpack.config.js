const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: __dirname,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PragmaBrewery Beer Dashboard',
      template: 'public/index.html'
    })
  ]
};
