// ********** Spread Operator ********** //
console.log('***** 13-Spread Operator *****');
// ********** Spread Operator ********** //

// Permite combinar arreglos diferentes
// Antes
console.log(' * Sin Spread Operator *');
let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworksSO = ['ReactJS', 'Laravel', 'Django'];

let combinacion = lenguajes.concat(frameworksSO);
console.log(combinacion);

// Después
console.log(' * Con Spread Operator *');
let combinacion2 = [...lenguajes, ...frameworksSO];
console.log(combinacion2);

// Otro ejemplo

function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3];

suma(...numeros);

console.log('--------------------'); //20