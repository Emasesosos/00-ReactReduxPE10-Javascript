// ********** Prototypes ********** //
console.log('***** 08-Prototypes *****');
// ********** Prototypes ********** //

// Te permite atar ciertas funciones a objetos

function mostrarInfoTarea(tarea, prioridad) {
    return `La tarea ${this.tarea} tiene una prioridad de ${this.prioridad}`;
}
// Object Literal
console.log('* Object Literal *');

const persona1 = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500,
    verdadero: true,
}
console.log(persona1);
// console.log(persona1.mostrarInfoTarea());
// const mostrarCliente = mostrarInfoTarea(persona1.nombre, persona1.profesion);
// console.log(mostrarCliente);


// Object Constructor: Crear multiples Objetos (distintos valores)
console.log('* Object Constructor *');

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// Agregar un Prototype a Tarea
Tarea.prototype.mostrarInfoTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea5 = new Tarea('Aprender Javascript y ReactJs', 'Urgente');
const tarea6 = new Tarea('Paser al Perro', 'Media');
console.log(tarea5);
console.log(tarea5.mostrarInfoTarea());
console.log(tarea6);
console.log(tarea6.mostrarInfoTarea());



console.log('--------------------'); //20