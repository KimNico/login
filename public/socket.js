const socket = io();
socket.emit('getProducts');

let tableBody = document.getElementById('tbody');
const formBtn = document.getElementById('formBtn');
const productList = document.getElementById('lista-productos');
const alertNo = document.getElementById('alerta-no-encontrado');

socket.on('productList', (data) => {
  if (!data.error && data.length > 0) {
    const htmlData = data.map((value) => {
      return `
        <tr>
            <td>${value.titulo}</td>
            <td>${value.precio}</td>
            <td><img class='img-thumbnail' style="width: 250px; height: 250px;" src='${value.foto}'> </td>
        </tr> `
    }).join(' ');
    tableBody.innerHTML = htmlData;
  }
});


formBtn.addEventListener('click', () => {
  socket.emit('newProduct');
});