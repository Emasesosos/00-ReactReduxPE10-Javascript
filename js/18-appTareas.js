/* Importar y Exportar Clases */
// ********** Importar, Exportar Clases ********** //
console.log('***** 19-Importar, Exportar Clases *****');
// ********** Importar, Exportar Clases ********** //

import Tarea from './17-appPOOClases.js';
import ComprasPendientes from './19-appImpExpClases.js';

const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
console.log(tarea1);

tarea1.mostrar();

const compra1 = new ComprasPendientes('Comprar Pizza', 'Urgente', 2);
console.log(compra1);
compra1.mostrar();
compra1.mostrar2();
compra1.mostrar3();
compra1.hola();

/* Importar y Exportar variables y funciones */
// ********** Importar, Exportar Módulos ********** //
// console.log('***** 18-Importar, Exportar Módulos *****');
// ********** Importar, Exportar Módulos ********** //

/*import { nombreTarea, crearTarea, tareaCompletada } from './17-appPOOClases.js';
console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro', 'Media');
console.log(tarea1);
tareaCompletada();*/

console.log('--------------------'); //20