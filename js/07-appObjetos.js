// ********** Objetos ********** //
console.log('***** 07-Objetos *****');
// ********** Objetos ********** //

// Object Literal
console.log('* Object Literal *')

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500,
    verdadero: true,
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['verdadero']);

// Object Constructor: Crear multiples Objetos (distintos valores)
console.log('* Object Constructor *')

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender Javascript y ReactJs', 'Urgente');
console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea1.urgencia);

const tarea2 = new Tarea('Preparar Café', 'Urgente');
console.log(tarea2);
console.log(tarea2.nombre);
console.log(tarea2.urgencia);

const tarea3 = new Tarea('Pasear al Perro', 'Media');
console.log(tarea3);
console.log(tarea3.nombre);
console.log(tarea3.urgencia);

const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');
console.log(tarea4);
console.log(tarea4.nombre);
console.log(tarea4.urgencia);


console.log('--------------------'); //20