const Site = require('./site')
const User = require('./user')

// table relationships go here

User.hasMany(Site)
Site.belongsTo(User)

Site.sync({ alter: true })
User.sync({ alter: true })

module.exports = { Site, User }
