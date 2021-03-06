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
    rules: [],
  },
};

