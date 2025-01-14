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

function collectingData(){

    
    var checkinIdVariable = document.getElementById('checkinId').value;
    var checkoutIdVariable = document.getElementById('checkoutId').value;
    var guestsAdultsIdVariable = document.getElementById('guestsAdultsId').value;
    var guestsChildrenIdVariable = document.getElementById('guestsChildrenId').value;
    console.log("email: "+emailIdVariable.value+"\n", "checkin: "+checkinIdVariable+"\n", "checkout: "+checkoutIdVariable+"\n", "guestAdult: "+guestsAdultsIdVariable+"\n", "child: "+guestsChildrenIdVariable+"\n", selected_package1, selected_package2);
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
