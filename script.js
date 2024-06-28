document.addEventListener('DOMContentLoaded', () => {
    loadList();
});

function saveItem() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity) {
        localStorage.setItem(item, quantity);
        loadList();
        clearForm();
    } else {
        alert('Please fill in both fields.');
    }
}

function updateItem() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity) {
        if (localStorage.getItem(item)) {
            localStorage.setItem(item, quantity);
            loadList();
            clearForm();
        } else {
            alert('Item does not exist.');
        }
    } else {
        alert('Please fill in both fields.');
    }
}

function deleteItem() {
    const item = document.getElementById('item').value;

    if (item) {
        if (localStorage.getItem(item)) {
            localStorage.removeItem(item);
            loadList();
            clearForm();
        } else {
            alert('Item does not exist.');
        }
    } else {
        alert('Please enter the item to delete.');
    }
}

function clearList() {
    localStorage.clear();
    loadList();
}

function loadList() {
    const tableBody = document.getElementById('shopping-list-table').querySelector('tbody');
    tableBody.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const quantity = localStorage.getItem(item);

        const row = document.createElement('tr');
        const itemCell = document.createElement('td');
        const quantityCell = document.createElement('td');

        itemCell.textContent = item;
        quantityCell.textContent = quantity;

        row.appendChild(itemCell);
        row.appendChild(quantityCell);
        tableBody.appendChild(row);
    }
}

function clearForm() {
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
}
