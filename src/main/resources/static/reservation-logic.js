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
        passToServer(order);
    } else {
        displayErrorMessage(errorsIn);
    }
}

// TODO: Serverkommunikasjon.

function passToServer(order) {
    $.post("/submitOrder", order, function() {
        updateOrderList();
    });
}

// TODO: Vis feilmeldinger ved failet inputvalidering.

function displayErrorMessage(errorsIn) {

}

function updateOrderList() {
    $.get("/getOrders", function(data) {
        console.log(data);
        const tableBody = document.getElementById('orderListBody')
        let tableHTML = "";
        for(let i = 0; i<data.length;i++) {
            tableHTML += `
                <tr>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phone}</td>
                    <td>${data[i].departure}</td>
                    <td>${data[i].arrival}</td>
                    <td>${data[i].departureDate}</td>
                </tr>
            `;
        }
        tableBody.innerHTML = tableHTML;
    })
}