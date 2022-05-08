$(onReady)

function onReady () {
    $('#submit').on('click', submitButton);
    $('#employee-body').on('click', '.deleteButton', deleteButton)
}


let monthlyTotal = 10373.33;

//Submit button - runs when clicked

function submitButton () {

    //Retrieving values

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeID = $('#employeeID').val();
    let employeeTitle = $('#employeeTitle').val();
    let annualSalary = $('#annualSalary').val();

    // Adding to total and appending to DOM

    monthlyTotal += Number(annualSalary / 12);
    $('.totalMonthly').html(`Monthly Total: $${monthlyTotal.toFixed(2)}`);

    //Changes color of total if it exceeds set amount

    if (monthlyTotal > Number(20000)) {
        $('.totalMonthly').addClass('overBudget');
        $('.totalMonthly').removeClass('totalMonthly');
    }

    //Checking for missing values

    if ( firstName === '' || lastName === '' 
        || employeeID === '' || employeeTitle === ''
        || annualSalary === '') {
            alert('Please fill in missing fields');
            return false;
        };
    
    //Appending to the DOM

    $('#employee-body').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${employeeID}</td><td>${employeeTitle}</td><td>${annualSalary}</td><td><button class = "deleteButton">Delete</button></td></tr>`)

    //Clearing values

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
}

//Delete buttons

function deleteButton (event) {
    let deleted = $(event.target);
    deleted.closest('tr').remove();
}