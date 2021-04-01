$(document).ready(function() {
    const date = new Date();
    const dateOneYearFromNow = new Date();
    dateOneYearFromNow.setFullYear(date.getFullYear() +1);
    const dateISO = date.toISOString().substr(0,10);
    const dateOneYearFromNowISO = dateOneYearFromNow.toISOString().substr(0, 10);
    const departureField = document.getElementById('departureDate');
    departureField.value = dateISO;
    departureField.min = dateISO;
    departureField.max = dateOneYearFromNowISO;
});

// TODO: Inputvalidering.
function onOrderSubmit() {
    event.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const departureDate = document.getElementById('departureDate').value;
    let passed = true;
    let errorsIn = [];
    if(!typeof(firstName) === "string" || firstName.length <= 0) {
        passed = false;
        errorsIn.push("firstName");
    }
    if(!typeof(lastName) === "string" || lastName.length <= 0) {
        passed = false;
        errorsIn.push("lastName");
    }
    if(!typeof(email) === "string" || email.length <= 0) {
        passed = false;
        errorsIn.push("email");
    }
    if(phone.length <= 0) {
        passed = false;
        errorsIn.push("phone");
    }

    if(passed) {
        const order = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            departure: departure,
            arrival: arrival,
            departureDate: departureDate
        }
        document.getElementById("msg").innerText = "Order complete.";
        passToServer(order);
    } else {
        displayErrorMessage(errorsIn);
    }
}

function destinationArrivalValidater() {
    if($('#departure').val() == $('#arrival').val() && $("#departure").val() != "Choose airport") {
        $('#arrival').val("Choose airport");
        $("#arrivalErrorMsg").text("Arrival and departure cannot be the same");
    }
}


// TODO: Serverkommunikasjon.
function passToServer(order) {
    $.post("/submitOrder", order, function() {

    });
}

// TODO: Vis feilmeldinger ved failet inputvalidering.
function displayErrorMessage(errorsIn) {

}

setInterval(function () {
    destinationArrivalValidater();
},50)

