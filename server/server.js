// go get express
const express = require('express');

// make a server called app
const app = express();
// create a PORT
const PORT = 5000;

// serve static files when requested
app.use(express.static('server/public'));

// start listening for connections
app.listen(PORT, () => {
    // console log to show server is listening
    console.log('RUNNING ON PORT:', PORT);
    
})