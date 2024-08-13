const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const users = require('./routes/users');
const session = require('express-session');
const passport = require('passport');
localStrategy = require('passport-local').Strategy;
const multer = require('multer');
const flash = require('connect-flash');
const mongo = require('mongodb');
const db = mongoose.connection;
const expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.engine('html',require('express-art-template'));
app.use(cookiePaeser());
app.use('/',router);
app.use(session({
  secret:'secret',
  saveUninitialized:true,
  resave:true
}));

//pasport
app.use(passport.initialize());
app.use(passport.session());

//validator
app.use(expressValidator);

app.use('/users',users);
app.use(express.static(path.join(__dirname,'')))
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.listen(5500,() => {
  console.log('successful...')
})


