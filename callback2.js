/*
let multiplicacion = (num1, num2, callback) => {

    let opera = {
        num1,
        num2,
        getFuncion() {
            return `${num1*num2}`;
        }
    }

    if (num2 < 5) {
        callback("Hola no puedes hacer esta operacion ");
    } else {
        callback(null, opera.getFuncion());
    }

}

multiplicacion(4, 6, (err, opera) => {

    if (err) {
        return console.log(err);
    }
    console.log("El resultado es : ", opera);
});
*/



let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melisa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000

}];



// ME CREO UN METODO PARA DETECTAR EL ID
let getEmpleado = (id, callback) => {
    //EXTRAIGO EL ID DEL ARRAY EMPLEADOS
    let empleadoDB = empleados.find(empleado => {
        return empleado.id == id;
    });
    if (!empleadoDB) {
        //el id lo controlas de parametro
        callback(`no existe el usuario ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

//CREO UN METODO PARA VER QUIEN TIENE SALARIO
let getSalario = (empleado, callback) => {
    //COMPARO EL ID DEL METODO ANTERIOR CON EL ID DE SALARIOS
    let salarioDB = salarios.find(empleadoid => {
        //AQUI LOS COMPARO POR PARAMETRO Y POR EL ARRAY
        return empleadoid.id === empleado.id;
    });
    if (!salarioDB) {
        callback(`no existe salario para el empleado ${empleado.nombre}`);
    } else {
        // ERR , SALARIODB
        // NULL , {}
        callback(null, {
            empleado: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}

getEmpleado(3, (err, empleadoDB) => {

    if (err) {
        return console.log(err);
    }
    //console.log(empleadoDB);

    getSalario(empleadoDB, (err, salarioDB) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el salario del empleado ${salarioDB.empleado} es de  ${salarioDB.salario}`);
    });
});




/*

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id == id;
    });
    if (!empleadoDB) {
        callback(`No existe el empleado DB ${id}`);
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let idDB = salarios.find(salario => {
        return salario.id === empleado.id;
    });

    if (!idDB) {
        callback(`no existe ese usuario `);

    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: idDB.salario,
            id: empleado.id
        });
    }
    //callback(salarioDB);

}




getEmpleado(1, (err, empleadoDB) => {
    if (err) {
        return console.log(err);
    }
    //console.log(empleadoDB);
    getSalario(empleadoDB, (err, retulsado) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el empleado ${retulsado.nombre} tiene el salario de ${retulsado.salario}`);
    });
});


*/