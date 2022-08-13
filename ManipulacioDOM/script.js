const h1 = document.querySelector('h1');
const alpha = document.querySelector('.alpha');
const identification = document.querySelector('#identification');
const p = document.querySelector('p');
const input = document.querySelector('input');

console.log(
    {
        h1,
        alpha,
        identification,
        p,
        input,
    }
);

h1.innerHTML = 'Hola mundo';
p.innerText = 'insertado con innertext';
console.log('La clase es ' + alpha.getAttribute('class'));
alpha.setAttribute('class', 'rojo');
console.log('La clase # es ' + alpha.getAttribute('class'));

h1.classList.add('add');
h1.classList.remove('add');

input.value = '123';
