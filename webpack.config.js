const FlowWebpackPlugin = require('flow-webpack-plugin');
const path = require('path');
const rootDirectory = path.resolve(__dirname);

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: rootDirectory,
  entry: path.resolve(rootDirectory, 'src/client/index.js'),
  output: {
    path: path.resolve(rootDirectory, 'public/dist'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-flow'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      }, // end js|jsx
    ], // end rules
  },
  plugins: [
    new FlowWebpackPlugin({
      failOnError: false,
      failOnErrorWatch: false,
      reportingSeverity: 'error',
      printFlowOutput: true,
      flowPath: require.main.require('flow-bin'),
      flowArgs: ['--color=always'],
      // verbose: false,
      // callback: (result) => {},
    }),
  ],
};

