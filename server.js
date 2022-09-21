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

// -------------------------
// Mongoose Connection Stuff
// -------------------------

const mongoURI = process.env.MONGO_URI;
db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', (error) => console.log(error.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected: ', mongoURI));
db.on('close', () => console.log('mongo disconnected!'));

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

// -------------------------
// Routes
// -------------------------

// Index

// New
app.get('/new', (req, res) => {
  // const newLog = new Logs()
  res.render('logs/New', {shipIsBroken});
})

// Delete

// Update

// Create -- the POST route
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

// Show


// ------------------
// App Is Listening
// ------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});