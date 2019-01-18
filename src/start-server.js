// The runner.
var startServer = require('universal-webpack/server');

// The server-side bundle path info.
var settings = require('../universal-webpack-settings');

// Only `configuration.context` and `configuration.output.path`
// parameters are used from the whole Webpack config.
var configuration = require('../webpack.config');

// Run the server.
startServer(configuration, settings);

