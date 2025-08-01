const prompt = require('prompt-sync')();
const marca = {
    init (idMarca, nombre, descripcion) {
        this.idMarca = idMarca;
        this.nombre = nombre;
        this.descripcion = descripcion;
    },
    getInfo() {
        return `${this.idMarca} ${this.nombre} ${this.descripcion}`;
    },
    updateDescripcion (descripcion) {
        this.descripcion = descripcion;
    },
    updateNombre (nombre) {
        this.nombre = nombre;
    }
}

function crearMarca(nombre, descripcion) {
    const nuevaMarca = Object.create(marca);
    nuevaMarca.init(idMarca, nombre, descripcion);
    marcas.push(nuevaMarca);
    idMarca++;
    console.log(`Marca creada: ${nuevaMarca.getInfo()}`);
}

function leerTodasLasMarcas() {
    console.log('Listado de marcas: \n ID Marca Nombre Descripcion');
    if (marcas.length === 0) {
        console.log('No hay marcas registradas.');
        return;
    }
    else {
        marcas.forEach(marca => {
            console.log(marca.getInfo());
        });
    }
}

//Funcion para buscar varias marcas a la vez por nombre
//Funcion para buscar marcas por letra inicial

function actualizarMarcaPorNombre(nombre) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre de la marca:');
    marcas.forEach(marca => {
        if (marca.nombre.toLowerCase() === nombre.toLowerCase()) {
            marca.updateNombre(nuevoNombre);
            return `${marca.getInfo()}`;
        }
    })
}

function actualizarMarcaPorDescripcion(nombre) {
    const nuevaDescripcion = prompt('Ingrese la nueva descripcion de la marca:');
    marcas.forEach(marca => {
        if (marca.nombre.toLowerCase() === nombre.toLowerCase()) {
            marca.updateDescripcion(nuevaDescripcion);
            return `${marca.getInfo()}`;
        }
    })
}

function actualizarMarca(nombre) {
    let salir = false;
    while (salir === false) {
        let opcion = prompt('Que dato de la marca desea actualizar? nombre (n), descripcion (d) o ambos (a)? Salir (s)').toLowerCase();
        switch (opcion) {
            case `n`:
                let infoN = actualizarMarcaPorNombre(nombre);
                console.log(`Marca actualizada: ${infoN}`);
                break;
            case `d`:
                let infoD = actualizarMarcaPorDescripcion(nombre);
                console.log(`Marca actualizada: ${infoD}`);
                break;
            case `a`:
                let infoA = actualizarMarcaPorNombre(nombre);
                let infoB = actualizarMarcaPorDescripcion(nombre);
                console.log(`Marca actualizada: ${infoA} ${infoB}`);
                break;
            case `s`:
                salir = true;
                break;
            default:
                console.log('Opción no válida. Por favor, elija n, d o a.');
                break;
        }
    }
}

function eliminarMarca(nombre) {
    let indice = marcas.findIndex(marca => marca.nombre.toLowerCase() === nombre.toLowerCase());
    if (indice !== -1) {
        marcas.splice(indice, 1);
        console.log(`Marca eliminada: ${nombre}`);
    } else {
        console.log(`Marca no encontrada: ${nombre}`);
    }
}

function existeNombreMarca(nombre) {
    marcas.forEach(marca => {
        if (marca.nombre.toLowerCase() === nombre.toLowerCase()) {
            return true;
        }
    })
}   

const marcas = [];
let idMarca = 1;


function menu() {
    let salir = false;
    while (salir === false) {
        console.log('Seleccione una opción: \n 1. Crear Marca \n 2. Leer Todas las Marcas \n 3. Actualizar Marca \n 4. Eliminar Marca \n 5. Salir')
        let opcion = prompt();
        switch (opcion) {
            case `1`:
                let nombre = prompt('Ingrese el nombre de la marca:').toLowerCase();
                while (existeNombreMarca(nombre)) {
                    console.log(`La marca ${nombre} ya existe. Por favor, ingrese un nombre diferente.`);
                    nombre = prompt('Ingrese el nombre de la marca:');
                }
                let descripcion = prompt('Ingrese la descripcion de la marca:');
                crearMarca(nombre, descripcion);
                break;
            case `2`:
                leerTodasLasMarcas();
                break;
            case `3`:
                let nombreActualizar = prompt('Ingrese el nombre de la marca a actualizar:').toLowerCase();
                while (existeNombreMarca(nombreActualizar)) {
                    console.log(`La marca ${nombreActualizar} no existe. Por favor, ingrese un nombre válido.`);
                    nombreActualizar = prompt('Ingrese el nombre de la marca a actualizar:');
                }
                actualizarMarca(nombreActualizar);
                break;
            case `4`:
                let nombreEliminar = prompt('Ingrese el nombre de la marca a eliminar:').toLowerCase();
                while (!existeNombreMarca(nombreEliminar)) {
                    console.log(`La marca ${nombreEliminar} no existe. Por favor, ingrese un nombre válido.`);
                    nombreEliminar = prompt('Ingrese el nombre de la marca a eliminar:');
                }
                eliminarMarca(nombreEliminar);
                break;
            case `5`:
                salir = true;
                console.log('Saliendo del programa...');
                break;
            default:
                console.log('Opción no válida. Por favor, elija una opción del menú.');
                break;
        }
    }
}

// Llamamos a la función menu para iniciar el programa
menu();