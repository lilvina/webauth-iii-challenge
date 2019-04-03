const router = require('express').Router()
const express = require('express')
const db = require('../data/dbConfig.js')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('../server/secrets.js').jwtSecret

router.get('/', restricted, (req, res) => {
  db('users').then(users => {
    res.status(200).json(users)
  }).catch(err => {
    res.status(500).json(err)
  })
})

function restricted(req, res, next) {
  const token = req.headers.authorization

  if(token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'Invalid credentials' })
      } else {
        //token valid
        req.decodedJwt = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'No token provided' })
  }
}

module.exports = router
