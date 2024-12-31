let rowIndex = 1;
let orderCount = 0; 

const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
const totalOrderCountElement = document.getElementById('totalOrderCount');


function updateOrderCount() {
    totalOrderCountElement.textContent = orderCount;
}

function addOrder(restaurant, menuItem, quantity, address, paymentMethod) {
    const row = tableBody.insertRow();
    row.setAttribute('data-id', rowIndex); 

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);

    
    cell1.textContent = rowIndex;
    cell2.textContent = restaurant;
    cell3.textContent = menuItem;
    cell4.textContent = quantity;
    cell5.textContent = address;
    cell6.textContent = paymentMethod;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteOrder(row);  
    cell7.appendChild(deleteButton);

    rowIndex++; 
    orderCount++;  
    updateOrderCount(); 
}

function deleteOrder(row) {
    row.remove(); 
    orderCount--; 
    updateOrderCount();  
}


document.getElementById('updateBtn').addEventListener('click', function () {
    
    const restaurant = document.getElementById('restaurant').value;
    const menuItem = document.getElementById('menuItem').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (restaurant && menuItem && quantity && address && paymentMethod) {
        addOrder(restaurant, menuItem, quantity, address, paymentMethod);
        document.getElementById('orderForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
