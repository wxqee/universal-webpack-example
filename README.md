## Development

start

```
$ DEBUG=example:* PORT=3000 npm run dev
```

## Production

Need to know that, npm `prod:*` tasks will finally auto add `NODE_ENV=production` by default.

```
$ DEBUG=example:* npm run prod
```

or

```
$ npm run prod:build
$ npm run prod:server:start
```

