// ********** Importar, Exportar Clases ********** //
console.log('***** 19-Importar, Exportar Clases *****');
// ********** Importar, Exportar Clases ********** //

// Herencia: Heredando de una clase 
// -> Hereda constructor y métodos de la clase padre
import Tarea from './17-appPOOClases.js';

export default class ComprasPendientes extends Tarea {
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
        console.log('Hola Casie');
    }
}

let compra1 = new ComprasPendientes('Jabón','Urgente', 3);
console.log(compra1.mostrar());
console.log(compra1.mostrar2());
compra1.mostrar3();
compra1.hola();

console.log('--------------------'); //20