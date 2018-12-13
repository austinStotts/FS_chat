const path = require('path');
module.exports = {
  entry: './app/client/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js?/,
      use: 'babel-loader'
    },{
      test: /\.css/,
      use: ["css-loader", 'style-loader']
    }]
  },
  mode: 'development'
}