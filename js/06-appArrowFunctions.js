// ********** Arrow Functions ********** //
console.log('***** 06-Arrow Functions *****');
// ********** Arrow Functions ********** //

// Sin Arrow Function
console.log('* Sin Arrow Function *');
let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('París');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);

// Con Arrow Function
console.log('* Con Arrow Function *');
let viajando2 = (destino) => {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje2;
viaje2 = viajando2('Alemania');
viaje2 = viajando2('Holanda');
viaje2 = viajando2('Madrid');

console.log(viaje2);

console.log('--------------------'); //20