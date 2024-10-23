#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'
import { PORT } from './config.js'
import express from 'express'
import { LocationController } from './controllers/location.controller.js'
import { Location } from './models/location.js'

const app = express()
const locationController = new LocationController()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h3>Olá, Hola, Hello!</h3>')
})

app.post('/locations', (req, res) => {
  const location = req.body || {}

  // input is correct type
  if (locationController.isLocation(location)) {
    // location is new
    const l: Location = { name: location.name.toLowerCase().trim(), seats: location.seats }

    if (locationController.getLocation(l.name) === undefined) {
      locationController.createLocation(l)
      res.status(200).json({ name: location.name, seats: location.seats })
    } else res.status(409).json({ error: `${l.name} already exists` })
  } else res.status(422).json({ error: 'wrong data type' })
})

app.get('/locations', (req, res) => {
  const locations = locationController.getAllLocations()
  res.status(201).json(locations)
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('wassup on', PORT)
})
