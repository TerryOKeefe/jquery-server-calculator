console.log('js loaded!');

$(document).ready(readyNow);

function readyNow() {
    // shows jQuery is loaded in console
    console.log('jQuery loaded');

    // Click listeners
    $('#submit').on('click', addInputs)
    
}

// function to take in inputs and post
function addInputs() {
    // gather input values into a new object
    let newInputs ={
        num1: $('#numOne').val(),
        num2: $('#numTwo').val()
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
    });
}
