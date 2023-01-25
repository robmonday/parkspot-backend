const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

const sitesRouter = require('./controllers/sites')
const usersRouter = require('./controllers/users')

logger.info('connecting to', config.DB_URL)

app.use(cors())

app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.use('/api/sites', sitesRouter)
app.use('/api/users', usersRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('.controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
