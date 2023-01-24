const { requestLogger } = require('../utils/middleware')

const sitesRouter = require('express').Router()
const sites = [
  {
    id: 1,
    address: '502 Main St',
    latLong: [1.142, 2.223],
    imgPath: 'generic1.jpg',
    ownerId: 1,
  },
  {
    id: 2,
    address: '200 Central St',
    latLong: [1.142, 2.223],
    imgPath: 'generic2.jpg',
    ownerId: 1,
  },
  {
    id: 3,
    address: '555 Walnut Street',
    latLong: [1.142, 2.223],
    imgPath: 'generic3.jpg',
    ownerId: 1,
  },
  {
    id: 4,
    address: '2211 Kingston Pk',
    latLong: [1.142, 2.223],
    imgPath: 'generic4.jpg',
    ownerId: 1,
  },
  {
    id: 5,
    address: '122 Kingston Pk',
    latLong: [1.142, 2.223],
    imgPath: 'generic5.jpg',
    ownerId: 1,
  },
  {
    id: 6,
    address: '502 Main St',
    latLong: [1.142, 2.223],
    imgPath: 'generic1.jpg',
    ownerId: 1,
  },
  {
    id: 7,
    address: '200 Central St',
    latLong: [1.142, 2.223],
    imgPath: 'generic2.jpg',
    ownerId: 1,
  },
  {
    id: 8,
    address: '555 Walnut Street',
    latLong: [1.142, 2.223],
    imgPath: 'generic3.jpg',
    ownerId: 1,
  },
  {
    id: 9,
    address: '2211 Kingston Pk',
    latLong: [1.142, 2.223],
    imgPath: 'generic4.jpg',
    ownerId: 1,
  },
  {
    id: 10,
    address: '122 Kingston Pk',
    latLong: [1.142, 2.223],
    imgPath: 'generic5.jpg',
    ownerId: 1,
  },
]

sitesRouter.get('/', (req, res) => {
  res.json(sites)
})

sitesRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const site = sites.find((site) => site.id === id)
  if (site) {
    res.json(site)
  } else {
    res.status(404).end()
  }
})

sitesRouter.post('/', (req, res) => {
  const body = req.body
  requestLogger.info(body)

  // const newSite = {
  //   id: sites.length,
  //   address: body.address,
  //   latLong: body.latLong,
  //   imgPath: 'generic' + (sites.length % 5) + '.jpg',
  //   ownerId: 1,
  // }
  // sites = [...sites, newSite]
  // res.json(sites.slice(-1))
})

module.exports = sitesRouter
