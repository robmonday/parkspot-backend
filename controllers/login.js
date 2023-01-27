const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const { SECRET } = require('../utils/config')

const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const body = req.body
  console.log(req.body)

  const user = await User.findOne({ where: { email: body.email } })
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return res.status(401).json({ error: 'invalid username or password' })
  }

  const userForToken = {
    email: user.email,
    id: user.id,
  }

  const token = jwt.sign(
    userForToken,
    SECRET,
    { expiresIn: 60 * 60 * 1 } // 1 hour
  )

  res.status(200).send({
    token,
    email: user.email,
    firstName: user.firstName, // is name needed?
    lastName: user.lastName, // is name needed?
  })
})

module.exports = loginRouter
