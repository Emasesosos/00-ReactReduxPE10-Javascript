// ********** Arreglos, map y Object.keys ********** //
console.log('***** 12-Arreglos, map y Object.keys *****');
// ********** Arreglos, map y Object.keys ********** //

// * Arreglos *
// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
// console.log(carrito);

// console.log('* Como arreglo *');
// const appContenedor = document.querySelector('#app');

// let html = '';

// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// })

// appContenedor.innerHTML = html;

// * Map *
// console.log('* Con map *')
// carrito2 = ['Producto 1', 'Producto 2', 'Producto 3'];
// carrito2.map(producto2 => {
//     return 'El producto es ' + producto2;
// });

// console.log(carrito2);

// * Con Object Keys *

const personaOK = {
    nombreOK: 'Emmanuel',
    profesionOK: 'Desarrollador Web',
    edadOK: 28
}
const {nombreOK} = personaOK;
console.log(personaOK);
console.log(nombreOK);

// ******* KEYS *******
console.log(' * Con Keys *');
console.log(Object.keys(personaOK));

console.log('--------------------'); //20