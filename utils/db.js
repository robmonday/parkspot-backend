const { Sequelize, QueryTypes } = require('sequelize')
const { DB_URL } = require('./config')

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    const sites = await sequelize.query('SELECT * FROM sites', {
      type: QueryTypes.SELECT,
    })
    console.log(sites)
  } catch (err) {
    console.error('failed to connect to the database')
  }
}

module.exports = { connectToDatabase, sequelize }
