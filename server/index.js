const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();  // Servidor

/* ----- Settings ----- */
app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.IP || '0.0.0.0');

/* ----- Middlewares ----- */
app.use(morgan('dev'));

// Cada vez que el servidor reciba/envie un dato, lo interpretara en formato JSON
app.use(express.json());

/* ----- Routes ----- */
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '../client/index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '../client/about.html'));
});

app.get('/api', function(req, res){
    res.sendFile(path.join(__dirname + '../client/api.html'));
});

app.use('/api/tweets', require('./routes/tweets.routes'));

/* ----- Static files ----- */
app.use(express.static(path.join(__dirname, '../client')));

// Set the app.listen to use the port and ip.
app.listen(app.get('port'), app.get('ip'), function(){
    console.log("Server on " + app.get('ip') + ":" + app.get('port'));
});
