const express = require('express');

const config = require('./config/database');

const app = express();

const mongoose = require('mongoose');

const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
	if (err) {
		console.log('Could not connect to database', err);
	}else{
		console.log('Connected to the database'+config.db);
	}
});


app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});



app.listen(8080,() => {
	console.log('Listening on port 8080');
});