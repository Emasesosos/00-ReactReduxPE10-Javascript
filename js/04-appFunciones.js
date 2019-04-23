// ********** Funciones y tipo de Funciones ********** //
console.log('***** 04-Funciones y tipo de Funciones *****');
// ********** Funciones y tipo de Funciones ********** //

// Básicos de una función

// function declaration
console.log('* function declaration *');

function saludar() {
    console.log('Bienvenido ');
}

saludar();

// function expression
console.log('* function expression *');

const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Cansandra');

console.log('--------------------'); //20