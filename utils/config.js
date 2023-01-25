require('dotenv').config()

const dbUrl = (nodeEnv) => {
  if (nodeEnv === 'testing') {
    return process.env.TEST_DB_URL
  }
  return process.env.DATABASE_URL
}

const DB_URL = dbUrl(process.env.NODE_ENV)
const PORT = process.env.port || '8080'

module.exports = { DB_URL, PORT }
