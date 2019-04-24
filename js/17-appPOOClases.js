// ********** POO:Clases ********** //
console.log('***** 17-POO:Clases *****');
// ********** POO:Clases ********** //

// Programación orientada a objetos con clases
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // Método
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);   
    }
}

// Crear objetos
let tarea1 = new Tarea('Aprender Javascript','Alta');
let tarea2 = new Tarea('Preparar Café', 'Urgente');
let tarea3 = new Tarea('Pasear al Perro', 'Media');
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');
console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

// Herencia: Heredando de una clase 
// -> Hereda constructor y métodos de la clase padre
class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar2(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad} y la cantidad de ${this.cantidad}`;   
    }
    mostrar3(){
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);   
    }
    hola(){
        return 'Hola Casie';
    }
}

let compra1 = new ComprasPendientes('Jabón','Urgente', 3);
console.log(compra1.mostrar());
console.log(compra1.mostrar2());
compra1.mostrar3();
console.log(compra1.hola());

console.log('--------------------'); //20

// ********** Importar, Exportar Módulos ********** //
console.log('***** 18-Importar, Exportar Módulos *****');
// ********** Importar, Exportar Módulos ********** //

console.log(' *Exportar variables* ');
export const nombreTarea = 'Pasear al Perro';
const tarea = 'tarea';

export const obj = {
    nombre: nombreTarea,
    tarea: tarea
}

console.log(' *Exportar Funciones* ');

export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completo');
}

// Otra forma por default

// const nombreTarea = 'Pasear al Perro';
// export default nombreTarea;


