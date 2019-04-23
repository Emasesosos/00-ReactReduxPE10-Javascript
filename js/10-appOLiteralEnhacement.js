// ********** Object Literal Enhacement ********** //
console.log('***** 10-Object Literal Enhacement *****');
// ********** Object Literal Enhacement ********** //

// Enhacement: Juntar Información

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Forma anterior
console.log('* Sin Enhacement *');
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
console.log(metallica)

// Con Enhacement
console.log('* Con Enhacement *');
const metallicaE = {banda, genero, canciones};
console.log(metallicaE);

console.log('--------------------'); //20