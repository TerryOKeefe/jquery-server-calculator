console.log('js loaded!');

$(document).ready(readyNow);

// variable to hold selected operator
let operator = '';

// function readyNow when document loads
function readyNow() {
    // shows jQuery is loaded in console
    console.log('jQuery loaded');

    // -- Click listeners --
    $('#submit').on('click', addInputs);
    // need a way to select operator
    $('.operatorBtn').on('click', function() {
        // set operator to the html equivalent 
        operator = $(this).html();
        // console log to show the operator selected
        console.log(operator);
        // highlight operator button on DOM
        $(this).addClass('highlight');
    });
    // call the getCalculation function
    getCalculation();
} // end readyNow

// function to take in inputs and post
function addInputs() {
    // log to check click listener
    console.log('Equals clicked!');
    
    // gather input values into a new object
    let newInputs ={
        firstNum: $('#numOne').val(),
        secondNum: $('#numTwo').val(),
        operator: operator
    };
    // console log to see that values get collected
    console.log(newInputs); 

    // make a post request with newInputs to send to server.js
    $.ajax({
        method: 'POST',
        url: '/history',
        data: newInputs // becomes req.body on server
    }).then(response => {
        // console log newInputs being sent to server.js
        console.log(response);
        // call the getCalculation
        getCalculation();
    });
} // end addInputs

// function to getCalculations from server.js
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(response => {
        console.log('what is Response?', response);
        // empty DOM
        $('#history').empty();
    
        // loop through and append to DOM
        for(let calc of response) {
            // empty valueOut
            $('#valueOut').empty();
            // append value to the DOM
            $('#valueOut').append(`${calc.result}`);
            // append values from response to the DOM history
            $('#history').append(`
            <li>
                ${calc.firstNumber} ${calc.operator} ${calc.secondNumber} 
                = ${calc.result}
            </li>
             `);
        }
    });
} // end getCalculation


