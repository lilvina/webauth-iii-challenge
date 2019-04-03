const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const authRouter = require('../routes/auth-router.js')
const userRouter = require('../routes/users-router.js')

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)

server.get('/', (req, res) => {
  res.send("I am alive and working!")
})

module.exports = server
