// ********** Scope ********** //
console.log('***** 02-Scope *****');
// ********** Scope ********** //

console.log('* Scope con VAR *');

var musica = 'Rock';

if (musica) {
    var musica = 'Grunge';
    console.log('Dentro del IF: ', musica);
}

console.log('Fuera del IF: ', musica);

// ********** Scope con LET ********** //
console.log('* Scope con LET *');

let musicaL = 'Rock';

if (musicaL) {
    let musicaL = 'Grunge';
    console.log('Dentro del IF: ', musicaL);
}

console.log('Fuera del IF: ', musicaL);

console.log('--------------------'); //20