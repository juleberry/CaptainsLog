// -------------------------
// Require Statements
// -------------------------

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Logs = require('./models/Logs');

// -------------------------
// Mongoose Connection Stuff
// -------------------------

const mongoURI = process.env.MONGO_URI;
db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, {
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

app.use(express.urlencoded({extended:false}));

// -------------------------
// Routes
// -------------------------

const logsController = require('./controllers/logs');
app.use('/logs', logsController);

// ------------------
// App Is Listening
// ------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});