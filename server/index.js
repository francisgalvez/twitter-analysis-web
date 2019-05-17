const express = require('express');
const app = express();  // Servidor

const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('./controllers/passport')(passport);

/* ----- Settings ----- */
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '0.0.0.0');
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');

/* ----- Middlewares ----- */
app.use(morgan('dev'));
app.use(cookieParser());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Passport session
app.use(session({
	secret: 'whosbest',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Each time the server receives/sends data, it will be interpreted in JSON format
app.use(express.json());

/* ----- Routes ----- */
app.use('/api/tweets', require('./routes/tweets.routes'));
require('./routes/routes')(app, passport);

/* ----- Static files ----- */
app.use(express.static(path.join(__dirname, '../client')));

// Set the app.listen to use the port and ip
app.listen(app.get('port'), app.get('ip'), function(){
    console.log("Server on " + app.get('ip') + ":" + app.get('port'));
});
