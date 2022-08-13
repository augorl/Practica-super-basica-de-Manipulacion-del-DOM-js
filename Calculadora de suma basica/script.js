const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const form = document.querySelector('form');
const pResultado = document.querySelector('#pResultado');

form.addEventListener('submit', suma);

function suma(event) {
    event.preventDefault();
    let resultado = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerHTML = 'Total = ' + resultado;
}