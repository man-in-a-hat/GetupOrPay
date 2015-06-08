module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};