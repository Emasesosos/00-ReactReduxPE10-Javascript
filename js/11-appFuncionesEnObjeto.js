// ********** Funciones en Objeto ********** //
console.log('***** 11-Funciones en Objeto *****');
// ********** Funciones en Objeto ********** //

// Creación de Objeto con object literal

// Forma anterior de agregar funciones en los objetos
console.log('* Antes *');
const personaFO = {
    nombre: 'Emmanuel',
    trabajo: 'Desarrollador Web',
    edad: 28,
    musicaRock: true, 
    mostrarInfo: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);   
    }
}

personaFO.mostrarInfo();

// Forma nueva de agregar funciones en los objetos
console.log('* Después *');
const personaFO2 = {
    nombre: 'Emmanuel',
    trabajo: 'Desarrollador Web',
    edad: 28,
    musicaRock: true, 
    mostrarInfo() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);   
    }
}

personaFO2.mostrarInfo();


console.log('--------------------'); //20