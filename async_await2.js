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




let getEmpleado = async(id) => {

    // return new Promise((resolve, reject) => {
    //EXTRAIGO EL ID DEL ARRAY EMPLEADOS
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });
    if (!empleadoDB) {
        //el id lo controlas de parametro
        throw new Error(`no existe el usuario ${id}`);
    } else {
        return empleadoDB;
    }
    //});
}

let getSalario = async(empleado) => {
    //return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(empleadoid => {
        return empleadoid.id === empleado.id;
    });
    if (!salarioDB) {
        //el id lo controlas de parametro
        throw new Error(`no existe salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
    //});
}

let getInformaicon = async(id) => {
    let empleado = await getEmpleado(id);
    let respues = await getSalario(empleado);
    return `${respues.nombre} tiene el salario de ${respues.salario}`;
}
getInformaicon(10)
    .then(mensaje => {
        console.log(mensaje);
    }).catch(err => {
        console.log(err);
    });