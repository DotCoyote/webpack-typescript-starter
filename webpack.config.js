const path = require('path');

module.exports = {  
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['./src/index.ts'],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts|tsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: [
          path.join(__dirname, '/src'),
        ],
      },
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, '/src'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: [
          path.join(__dirname, '/src'),
        ],
        options: {
          onlyCompileBundledFiles: true,
          transpileOnly: true,
          experimentalWatchApi: false,
        },
      },
    ]
  }
}