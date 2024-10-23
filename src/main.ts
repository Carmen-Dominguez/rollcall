#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'
// import { createServer, IncomingMessage, ServerResponse } from 'http'
// import { resolve } from 'path'
// import { fileURLToPath } from 'url'
import { PORT } from './config.js'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h3>Olá, Hola, Hello!</h3>')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('wassup on', PORT)
})

// const nodePath = resolve(process.argv[1])
// const modulePath = resolve(fileURLToPath(import.meta.url))
// const isCLI = nodePath === modulePath

// export default function main(port: number = Config.port) {
//   const requestListener = (request: IncomingMessage, response: ServerResponse) => {
//     response.setHeader('content-type', 'text/plain;charset=utf8')
//     response.writeHead(200, 'OK')
//     response.end('Olá, Hola, Hello!')
//   }

//   const server = createServer(requestListener)

//   if (isCLI) {
//     server.listen(port)
//     // eslint-disable-next-line no-console
//     console.log(`Listening on port: ${port}`)
//   }

//   return server
// }

// if (isCLI) {
//   main()
// }
