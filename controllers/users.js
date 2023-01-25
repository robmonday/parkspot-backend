const { User } = require('../models')

const usersRouter = require('express').Router()

usersRouter.get('/', async (req, res) => {
  const users = await User.findAll()
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
  try {
    const user = await User.create({ ...req.body })
    res.json(user)
  } catch (error) {
    res.status(404).json({ error })
  }
})

module.exports = usersRouter
