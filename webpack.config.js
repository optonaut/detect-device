module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    library: 'DetectDevice',
    libraryTarget: 'umd',
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
