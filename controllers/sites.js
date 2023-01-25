const { Site } = require('../models')

const sitesRouter = require('express').Router()

sitesRouter.get('/', async (req, res) => {
  const sites = await Site.findAll()
  res.json(sites)
})

sitesRouter.get('/:id', async (req, res) => {
  const site = await Site.findByPk(req.params.id)
  if (site) {
    res.json(site)
  } else {
    res.status(404).end()
  }
})

sitesRouter.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const site = await Site.create({ ...req.body })
    res.json(site)
  } catch (error) {
    return res.status(400).json({ error })
  }
})

module.exports = sitesRouter
