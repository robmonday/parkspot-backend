const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

const sitesRouter = require('./controllers/sites')

logger.info('connecting to', config.DB_URI)

app.use(cors())

app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.use('/api/sites', sitesRouter)

// if (process.env.NODE_ENV === 'test') {
//   const testingRouter = require('.controllers/testing')
//   app.use('/api/testing', testingRouter)
// }

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
