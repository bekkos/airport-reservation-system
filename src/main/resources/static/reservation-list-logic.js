function updateOrderList() {
    $.get("/getOrders", function(data) {
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
                    <td><button class="btn btn-danger" id="${i}" onclick="deleteMe(this.id);">Cancel</button></td>
                </tr>
            `;
        }
        tableBody.innerHTML = tableHTML;
    })
}

setInterval(function() {
    updateOrderList();
},500);

function deleteMe(id) {
    $.get("/delete?id="+id, () => {
        updateOrderList();
    });
}