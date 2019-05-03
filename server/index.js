const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./databases');

const app = express();  // Servidor

/* ----- Settings ----- */
//app.set('port', process.env.PORT || 3000);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost');

/* ----- Middlewares ----- */
app.use(morgan('dev'));

// Cada vez que el servidor reciba/envie un dato, lo interpretara en formato JSON
app.use(express.json());

/* ----- Routes ----- */
app.use('/api/tweets', require('./routes/tweets.routes'));

/* ----- Static files ----- */
app.use(express.static(path.join(__dirname, '../client')));

// Set the app.listen to use the port and ip.
app.listen(app.get('port'), app.get('ip'), function(){
    console.log("Server on " + app.get('ip') + ":" + app.get('port'));
});
