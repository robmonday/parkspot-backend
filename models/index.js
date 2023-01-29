const User = require('./user')
const Site = require('./site')

// table relationships go here

User.hasMany(Site)
Site.belongsTo(User)

module.exports = { User, Site }
