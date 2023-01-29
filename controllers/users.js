const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const { User, Site } = require('../models')

usersRouter.get('/', async (req, res) => {
  const users = await User.findAll({
    include: { model: Site, attributes: { exclude: 'userId' } },
  })
  res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

usersRouter.post('/', async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({ firstName, lastName, phone, email, passwordHash })
  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

module.exports = usersRouter
