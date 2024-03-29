const path = require('path');

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
    ]
  },
  plugins: [
  ]
};