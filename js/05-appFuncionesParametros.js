// ********** Funciones con Parámetros ********** //
console.log('***** 05-Funciones con Parámetros *****');
// ********** Funciones con Parámetros ********** //

// Parámetro por default en las funciones
console.log('** Parámetro por default en las funciones **');
console.log('* function declaration *');

function actividad(nombre = 'Walter White', actividad = 'Enseñar Química') {
    console.log(`La persona ${nombre}, está realizando la actividad
                 ${actividad}`);
}

actividad('Emmanuel', 'Aprender Javascript');
actividad('Casandra', 'Creando un sitio Web');
actividad();

console.log('** Parámetro por default en las funciones **');
console.log('* function expression *');

const actividad2 = function(nombre = 'Walter White', actividad = 'Enseñar Química') {
    console.log(`La persona ${nombre}, está realizando la actividad
                 ${actividad}`);
}

actividad2('Emmanuel', 'Aprender Javascript');
actividad2('Casandra', 'Creando un sitio Web');
actividad2();

console.log('--------------------'); //20