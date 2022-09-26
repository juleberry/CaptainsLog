const express = require("express")
const router = express.Router()
const seedData = require('../models/seed')
// model
const Log = require('../models/Log');

// ---------------------
// Seed Routes
// ---------------------

// CLEAR DATABASE
router.get('/clear', (req, res) => {
  Log.deleteMany({}, (error, data) => {
    if (error) {
      console.error(error)
    } else {
    res.json({
      message: 'Cleared all logs'
      })
    }
  })
})

// SEED DATABASE ROUTE
// add all data to database
router.get('/seed', (req, res) => {
  Log.insertMany(seedData, (error, created) => {
    if (error) {
      console.error(error)
    } else {
      res.json({
        message: 'Seeded database'
      })
    }
  })
})

// RESET DATABASE
router.get('/reset', (req, res) => {
  Log.deleteMany({}, (error, data) => {
    if (error) {
      console.error(error)
    } else {
      Log.insertMany(seedData, (error, created) => {
        if (error) {
          console.error(error)
        } else {
          res.json({
            message: 'Database has been reset'
          })
        }
      })
    }
  })
})

// -------------------------
// Main Routes
// -------------------------

// Index
router.get('/', (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render('logs/Index', {
      logs: allLogs
    });

  })
});

// New
router.get('/new', (req, res) => {
  res.render('logs/new');
})

// Delete
router.delete('/:id', (req, res) => {
  Log.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('');
  })
});

// Update
router.put('/:id', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  Log.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/logs/${req.params.id}`);
    }
  });
});

// Create -- create a new log; the POST route
router.post('', (req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect('/logs')
  //   res.redirect('/logs/Show')
    console.log('Log Created')

  })
});

// Edit
router.get('/:id/edit', (req, res) => {
  Log.findOne({
    _id: req.params.id
  }, (error, foundLog) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('logs/Edit', { log: foundLog });
    }
  })
});

// Show
router.get('/:id', (req, res) => {
  Log.findOne({ _id: req.params.id }, (error, foundLog) => {
    res.render('logs/Show', {
      log: foundLog
    });
  });
});

module.exports = router