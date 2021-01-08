//require
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

//var numero = 4;

//CONSTANTE CREA EL ARCHIVO 




/*
const sistemafile = require('fs');
let base = 3;
let datas = '';

//EJECUTA EN LA MISMA CONSOLA
for (let index = 0; index < 10; index++) {
    datas += (`${base} * ${index} = ${base*index}\n`);
}
const data = new Uint8Array(Buffer.from(datas));
sistemafile.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw Error;
    else
        console.log(`tabla-${base}.txt`);
});
*/



//MODULO  Y EXPORT DENTRO DE MODULO CREA EL ARCHIVO
// si ejecutamos solo en consola module en exports nos ayuda a llamar desde otro archivo 
//console.log(module);


/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
    */

const argv = require('./config/yargs').argv;


const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');


let descomponer = argv._[0];

switch (descomponer) {
    case 'listar':
        //console.log(argv);
        listarArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);

        });
        break;
    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);

        });
        break;
    default:
        console.log('comando no reconocido');

        break;
}




/*
let descomponer = argv._[0];

switch (descomponer) {

    case 'listar':
        console.log('Listar');
        break;
    case 'crear':
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');

}
*/


/*
var numero = 8;
crearArchivo(numero).then(archivo => {
    console.log(`Archivo creado: ${archivo}`);
}).catch(err => {
    console.log(err)
});
*/
//console.log('limite', argv.limite);

/*
let argv = process.argv;
let parametro = argv[2];
let separa = parametro.split('=')[1];
console.log(separa);
*/

/*
crearArchivo(separa).then(result => {
    console.log(`Archivo creado: ${result}`)
}).catch((err) => {
    console.log(err);
});
*/