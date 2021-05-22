// go get express
const express = require('express');
const bodyParser = require('body-parser');

// make a server called app
const app = express();
// create a PORT
const PORT = 5000;

// serve static files when requested
app.use(express.static('server/public'));
// use bodyParser to find the data sent in post
app.use(bodyParser.urlencoded({extended : true}));

// empty array to take in new inputs
let history = [];

// post to add new data
app.post('/history', (req, res) => {
    // console log to check that we receive inputs
    console.log('Received from inputs', req.body);
    //push inputs into history array
    history.push(req.body);
    // send an OK status in terminal
    res.sendStatus(200);
});

















// start listening for connections
app.listen(PORT, () => {
    // console log to show server is listening
    console.log('RUNNING ON PORT:', PORT);
})