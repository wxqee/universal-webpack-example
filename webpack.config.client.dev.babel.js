var debug = require('debug')('example:webpack-client-dev');
var config = require('./webpack.config.client.babel');
var port = 3001;

config.output.publicPath = `http://localhost:${port}${config.output.publicPath}`;
config.devServer = {
  ...config.devServer,
  port,
  headers: {
    ...(config.devServer ? config.devServer.headers : {}),
    'Access-Control-Allow-Origin': '*', // TODO: try to resolve CORS assets from webpack-dev-server when on server.
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
};

debug('updated config.output.publicPath = %j', config.output.publicPath);
debug('updated config.devServer = %j', config.devServer);

module.exports = config;
