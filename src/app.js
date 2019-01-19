import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import createDebug from 'debug';

import index from './routes/index';
import users from './routes/users';

const debug = createDebug('example:app');
const isProd = process.env.NODE_ENV === 'production';

const app = express();
const cwd = process.cwd();

// view engine setup
debug('view engine setup');
app.set('views', path.join(cwd, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
debug('other middlewares');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(cwd, 'public')));

debug('other router');
app.use(function useWebpackChunks(req, res, next) {
	res.locals.isProd = isProd;
	res.locals.chunks = app.get('webpack').chunks();
	debug('res.locals.chunks ==> %j', res.locals.chunks);
	next();
});
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
