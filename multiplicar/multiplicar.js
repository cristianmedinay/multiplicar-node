const fs = require('fs');
const { resolve } = require('path');



let listarArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let datass = '';

        if (!Number(base)) {
            reject(`la ${base} o el ${limite} no es un numero`);
            return;
        }


        for (let i = 0; i <= limite; i++) {
            datass += (` ${base} * ${i} = ${base*i}\n`);
        }
        console.log(datass);

        const data = new Uint8Array(Buffer.from(datass));
        fs.writeFile(`tablas/listado-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`listado-${base}.txt`);
        });

    });

}




//module.exports.crearArchivo = (numero) => {

let crearArchivo = (numero, limites = 10) => {


    return new Promise((resolve, reject) => {
        let datas = '';

        //CONTROLAMOS EL ERROR SI ES NUMERO O LETRA
        if (!Number(numero)) {
            reject(`el valor introducido ${numero} no es un numero `);
            return;
        }

        //LA TABLA DE MULTIPLICAR
        for (let j = 1; j <= limites; j++) {
            datas += (`${j}*${numero}=${numero*j}\n`);
        }


        //FILE PARA CREAR EL TEXTO
        const data = new Uint8Array(Buffer.from(datas));
        fs.writeFile(`tablas/tabla-${numero}-limite${limites}.txt`, data, (err) => {

            if (err) reject(err);
            else
            //USAMOS UNA PROMESA
                resolve(`tabla-${numero}-limite${limites}.txt`);
            //console.log('The file has been saved!');
        });


    });
}

//MODULO  Y EXPORT DENTRO DE MODULO CREA EL ARCHIVO
// si ejecutamos solo en consola module en exports nos ayuda a llamar desde otro archivo 
//console.log(module);

module.exports = {
    crearArchivo,
    //crearArchivo: crearArchivo
    listarArchivo
}