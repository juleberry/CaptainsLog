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

// allows override of put 
const methodOverride = require('method-override');

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

// routes moved to controllers
const logController = require('./controllers/logs')
app.use('/logs', logController)

// ------------------
// App Is Listening
// ------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});