const express = require('express');
const router = express.Router();
const Logs = require('../models/Logs.js');

// Index

// New
router.get('logs/new', (req, res) => {
  res.send('new');
})

// Delete

// Update

// Create

// Edit

// Show


module.exports = router