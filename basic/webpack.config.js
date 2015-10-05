
var path = require('path');

module.exports = {
  entry: {
    index: './public/index.js',
    post:  './public/post.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  }

};
