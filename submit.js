var selected_package1 = '';
var selected_package2 = 'Full Package (Breakfast, Lunch, Dinner)';


// Add an event listener to validate the email input
var emailIdVariable = document.getElementById('emailId');
emailIdVariable.addEventListener('input', (event) => {
    const emailValue = event.target.value;

    // Check if the input contains "@"
    if (emailValue.includes('@')) {
        checkingLogin();
    }
  });

  function collectingData() {
    // Retrieve form inputs
    const name = document.getElementById('nameId').value;
    const phone = document.getElementById('phoneId').value;
    const password = document.getElementById('passwordId').value;
    const confirmPassword = document.getElementById('confirmPasswordId').value;
    const checkin = document.getElementById('checkinId').value;
    const checkout = document.getElementById('checkoutId').value;
    const adults = document.getElementById('guestsAdultsId').value;
    const children = document.getElementById('guestsChildrenId').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save booking details to localStorage
    const bookingDetails = {
        name,
        email:emailIdVariable.value,
        phone,
        password, // Save the password (hashed later in real applications)
        checkin,
        checkout,
        package: selected_package1,
        chefService: selected_package2, // Add chef service
        adults,
        children,
    };

    //console.log(bookingDetails);

    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
}



function showChefOptions(value) {
    var options = document.getElementById('chef-options'); 
    

    if (value != '0') {
        options.style.display = 'block';
        selected_package1 = value;
    } else {
        options.style.display = 'none';

    }
}

function collectValue(v){

    selected_package2 = v;

}

function checkingLogin(){

    document.getElementById('hidingDiv').style.display = 'block';
    

}
