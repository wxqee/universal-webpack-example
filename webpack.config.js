const path = require('path');
const rootDirectory = path.resolve(__dirname);

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: rootDirectory,
  entry: path.resolve(rootDirectory, 'src/client/index.ts'),
  devtool: 'source-map',
  output: {
    path: path.resolve(rootDirectory, 'public/dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      }, // end jsx?
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ], // end rules
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};

