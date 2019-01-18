var { server } = require('universal-webpack/config');
var settings = require('./universal-webpack-settings');
var configuration = require('./webpack.config');

// Create server-side Webpack config.
module.exports = server(configuration, settings);

