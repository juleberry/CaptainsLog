// -------------------------
// Require Statements
// -------------------------
// express makes http request
const express = require('express');
// creating express app
const app = express();
// use env variable (process.env.baseurl for example)
require('dotenv').config();
const mongoose = require('mongoose');
// model
const Log = require('./models/Log');
// allows override of put 
const methodOverride = require('method-override');
const seedData = require('./models/seed')

// -------------------------
// Mongoose Connection Stuff
// -------------------------

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
})

// -------------------------
// Setting Up View Engine
// -------------------------

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// -------------------------
// Setting Up Body Parser
// -------------------------
// reads the json
app.use(express.urlencoded({extended:false}));

// -------------------------
// Method Override
// -------------------------
// overrides post request to a delete or update request
app.use(methodOverride('_method'));

// ---------------------
// Seed Routes
// ---------------------
// dont forget to 'require' seedData
// CLEAR DATABASE
app.get('/logs/clear', (req, res) => {
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
app.get('/logs/seed', (req, res) => {
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
app.get('/logs/reset', (req, res) => {
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
app.get('/logs', (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render('logs/Index', {
      logs: allLogs
    });
    console.log('Log Index Page')

  })
});

// New
app.get('/logs/new', (req, res) => {
  res.render('logs/new');
  console.log('Make a New Log Form Page')
})

// Delete
app.delete('/logs/:id', (req, res) => {
  Log.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('/logs');
  })
});

// Update
app.put('/logs/:id', (req, res) => {
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
app.post('/logs', (req, res) => {
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
app.get('/logs/:id/edit', (req, res) => {
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
app.get('/logs/:id', (req, res) => {
  Log.findOne({ _id: req.params.id }, (error, foundLog) => {
    res.render('logs/Show', {
      log: foundLog
    });
  });
});

// ------------------
// App Is Listening
// ------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});