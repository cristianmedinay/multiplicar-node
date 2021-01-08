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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        //EXTRAIGO EL ID DEL ARRAY EMPLEADOS
        let empleadoDB = empleados.find(empleado => {
            return empleado.id == id;
        });
        if (!empleadoDB) {
            //el id lo controlas de parametro
            reject(`no existe el usuario ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
        return new Promise((resolve, reject) => {
            let salarioDB = salarios.find(empleadoid => {
                return empleadoid.id === empleado.id;
            });
            if (!salarioDB) {
                //el id lo controlas de parametro
                reject(`no existe salario para el usuario ${empleado.nombre}`);
            } else {
                resolve({
                    nombre: empleado.nombre,
                    salario: salarioDB.salario,
                    id: empleado.id
                });
            }
        });
    }
    /*
    getEmpleado(10).then((empleado) => {
        console.log('empleado de BD', empleado);
    }).catch((err) => {
        console.log(err);
    });
    */

/*
getEmpleado(30).then(empleado => {
    getSalario(empleado).then(salario => {
        console.log(`el salario del empleado ${salario.nombre} es de ${salarioDB.salario}`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});*/


/*
getEmpleado(10).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
});
*/


/////////////////////PROMESAS ENCADENADAS NO HACES UN ERROR EN ESPAGUETI

getEmpleado(3).then((empleado) => {
    return getSalario(empleado);
}).then((resultado) => {
    console.log(`el empleado ${resultado.nombre} tiene el salario de ${resultado.salario}`);
}).catch(err => {
    console.log(err);
});