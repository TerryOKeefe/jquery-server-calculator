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
let calcHistory = [];

// post to add new data
app.post('/calculator', (req, res) => {
    // console log to check that we receive inputs
    console.log('Received from inputs', req.body);
    
    // set received inputs as new variables
    // target req.body firstNum
    let numberOne = req.body.firstNum;
    // target req.body secondNum
    let numberTwo = req.body.secondNum;
    // target req.body operator
    let operator = req.body.operator;
    // need a new variable for calculated result
    let result = 0;

    // calculation of numbers here
    if (operator === '+') {
        // addition
        result = Number(numberOne) + Number(numberTwo);
        // log to make sure result adds
        console.log('result:', result);
    } else if (operator === '-') {
        // subtract 
        result = Number(numberOne) - Number(numberTwo);
        // log to make sure result subtracts
        console.log('result:', result);
    } else if (operator === '*') {
        // multiply
        result = Number(numberOne) * Number(numberTwo);
        // log to make sure result multiplies 
        console.log('result:', result);
    } else if (operator === '/') {
        result = Number(numberOne) / Number(numberTwo);
        // log to make sure result divides
        console.log('result:', result);
    } else {
        // send back an error
        result = ('No operator selected!');
    }

    // new object with information that can be used to append to DOM
    let calculatedObj = {
        firstNumber: numberOne,
        secondNumber: numberTwo,
        operator: operator,
        result: result
    }
    
    // log to check object
    console.log('Calculated Object:', calculatedObj);
    // push result into empty array
    calcHistory.push(calculatedObj);
    // console log to show items pushed into calcHistory
    console.log('calcHistory:', calcHistory);
    // send an OK status in terminal
    res.sendStatus(200);
});

// GET response 
app.get('/calculator', (req, res) => {
    console.log('got to /calculator');
    // respond back with
    res.send(calcHistory);
});

// start listening for connections
app.listen(PORT, () => {
    // console log to show server is listening
    console.log('RUNNING ON PORT:', PORT);
});