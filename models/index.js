const User = require('./user')
const Site = require('./site')

// table relationships go here

User.hasMany(Site)
Site.belongsTo(User)

User.sync({ alter: true })
Site.sync({ alter: true })

module.exports = { User, Site }
