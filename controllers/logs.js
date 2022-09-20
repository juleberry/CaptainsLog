const express = require('express');
const router = express.Router();
const Logs = require('../models/Logs.js');

// Index

// New
router.get('/new', (req, res) => {
  res.render('/New');
})

// Delete

// Update

// Create

// Edit

// Show


module.exports = router