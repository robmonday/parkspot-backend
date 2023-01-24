require('dotenv').config()

let DB_URI = process.env.DB_URI
let PORT = process.env.port || '8080'

module.exports = { DB_URI, PORT }
