module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    library: 'DetectDevice',
    filename: 'detect-device.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(json)$/,
      loader: 'json'
    }]
  }
}
