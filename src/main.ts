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
import { UserController } from './controllers/user.controller.js'
import { User } from './models/user.js'

const app = express()
const locationController = new LocationController()
const userController = new UserController()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h3>Olá, Hola, Hello!</h3>')
})

// locations
app.post('/locations', (req, res) => {
  const location = req.body || {}

  // input is correct type
  if (locationController.isLocation(location)) {
    // location is new
    const l: Location = { name: location.name.toLowerCase().trim(), seats: location.seats }

    if (locationController.getLocation(l.name) === undefined) {
      locationController.createLocation(l)
      res.status(201).json({ name: location.name, seats: location.seats })
    } else res.status(409).json({ error: `${l.name} already exists` })
  } else res.status(422).json({ error: 'wrong data type' })
})

app.get('/locations', (req, res) => {
  const locations = locationController.getAllLocations()
  res.status(200).json(locations)
})

// schedule

// users
// create
app.post('/users', (req, res) => {
  const user = req.body || {}

  if (userController.isUser(user)) {
    const u: User = { userName: user.userName.trim(), email: user.email.toLowerCase().trim(), role: user.role }

    if (userController.getUser(u.userName) === undefined) {
      userController.createUser(u)
      res.status(201).json(u)
    } else res.status(409).json({ error: `${u.userName} already exists` })
  } else res.status(422).json({ error: 'wrong data type' })
})

// read
// get all users
app.get('/users', (_req, res) => {
  const users = userController.getAllUsers()
  res.status(200).json(users)
})

// get specific user
app.get('/users/:username', (req, res) => {
  const userName: string = req.params.username

  const user = userController.getUser(userName)

  if (user) {
    res.status(200).json(user)
  } else res.status(404).json({ error: `${userName} not found` })
})

// update user
app.put('/users/:username', (req, res) => {
  const userName = req.params.username
  const userData = req.body

  if (userController.getUser(userName)) {
    if (userController.isUser(userData)) {
      userController.updateUser(userData)
    } else res.status(422).json({ error: 'wrong data type' })
  } else res.status(404).json({ error: `${userName} not found` })
  res.status(200)
})

// delete

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('wassup on', PORT)
})
