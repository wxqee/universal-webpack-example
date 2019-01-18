var { client } = require('universal-webpack/config');
var settings = require('./universal-webpack-settings');
var configuration = require('./webpack.config');

// Create client-side Webpack config.
module.exports = client(configuration, settings);

