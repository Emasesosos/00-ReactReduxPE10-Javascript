// ********** Object Destructuring ********** //
console.log('***** 09-Object Destructuring *****');
// ********** Object Destructuring ********** //

// Normal: Forma de extraer información de un objeto
console.log(' * Normal *');
const aprendiendoJs = {
    version: { 
        nueva: 'ES6+',
        anterior: 'ES5',
    },
    frameworks: ['ReactJS', 'VueJS', 'AngularJS'],
}
console.log(aprendiendoJs);
console.log(aprendiendoJs.version);
console.log(aprendiendoJs.frameworks);

// Destructuring: Forma de extraer información de un objeto
console.log('* Destructuring *')
let {version, frameworks} = aprendiendoJs;
console.log(version);
console.log(frameworks);

let {nueva} = aprendiendoJs.version;
console.log(nueva);



console.log('--------------------'); //20