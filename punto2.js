/**
 * 
 * @param {String} nombre 
 * @param {Number} cedula 
 * @param {Number} telefono 
 * @param {String} email 
 * @returns Objeto con las validaciones
 * @Author: Johan Gomez <johang0297@gmail.com>
 */
const datos = (nombre, cedula, telefono, email) => {
    let nombreValido = validarNombre(nombre);
    let cedulaValida = cedula > 1000000000;
    let telefonoValido = telefono.length == 10 && telefono[0] == 3;
    let emailValido = validarEmail(email);

    return {
        nombre: nombreValido,
        cedula: cedulaValida,
        telefono: telefonoValido,
        email: emailValido
    }

    
}

/**
 * 
 * @param {String} email 
 * @returns {Boolean} Si el email es valido o no
 */
function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * 
 * @param {String} nombreC 
 * @returns {Boolean} Si el nombre es valido o no
 */
function validarNombre(nombreC) {
    let nombre = nombreC.split(" ");
    let valido;

    if (nombre.length >= 3) {
        valido = true;
    } else {
        valido = false;
    }

    nombre.forEach(palabra => {
        if (palabra[0] != palabra[0].toUpperCase()) {
            valido = false;
            return;
            
        }
    });

    return valido;
}

const prueba = datos("Juan David Perez", 1234567890, "3125556789", "johang0297@gmail.com");
console.log(prueba);