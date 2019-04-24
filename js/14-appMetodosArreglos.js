// ********** Métodos en Arreglos ********** //
console.log('***** 14-Métodos en Arreglos *****');
// ********** Métodos en Arreglos ********** //

const personas = [
    {
        nombre: 'Emmanuel',
        edad: 28,
        aprendiendo: 'Javascript'
    },
    {
        nombre: 'Jardiel',
        edad: 20,
        aprendiendo: 'PHP'
    },
    {
        nombre: 'Pablo',
        edad: 32,
        aprendiendo: 'AdobeXD'
    },
    {
        nombre: 'Casandra',
        edad: 24,
        aprendiendo: 'Python'
    },
    {
        nombre: 'Adriana',
        edad: 33,
        aprendiendo: 'ReactJS'
    },
];

console.log(personas);

//Mayores de 28 años * filter *
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});
console.log(mayores);

// Qué aprende Casandra y su edad * find *
const casandra = personas.find(persona => {
    return persona.nombre === 'Casandra';
});
console.log('Casandra está aprendiendo: ' + casandra.aprendiendo);

// Total de las edades de la personas * reduce *
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);

console.log('--------------------'); //20