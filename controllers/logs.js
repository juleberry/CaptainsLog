const express = require('express');
const router = express.Router();
const Logs = require('../models/Logs')

// Index

// New
router.get('/new', (req, res) => {
  // const newLog = new Logs()
  res.render('logs/New', {shipIsBroken});
})

// Delete

// Update

// Create
router.post('/', (req, res) => {
  Logs.create(req.body, (error, createdLog) => {
    res.redirect('/logs')
  })
  })

// Edit

// Show


module.exports = router