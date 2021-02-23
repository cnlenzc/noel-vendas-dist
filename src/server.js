require('dotenv').config()

const
  express = require('express'),
  history = require('connect-history-api-fallback'),
  path = require('path'),
  serveStatic = require('serve-static')

express()
  .use(history())
  .use(serveStatic(path.join(__dirname, '../dist/spa')))
  .listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
