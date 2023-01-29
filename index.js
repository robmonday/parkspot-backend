// The index.js file only imports the actual application
// from the app.js file and then starts the application.

const app = require('./app')
const { PORT } = require('./utils/config')
const logger = require('./utils/logger')

const { connectToDatabase } = require('./utils/db')

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
  })
}

start()
