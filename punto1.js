/**
 * @param {Number} cantidad 
 * @param {Array} arreglo 
 * @returns {Array} Arreglo de numeros aleatorios
 *  Retorna un arreglo del tamaño definido en el parámetro cantidad con números aleatorios entre 1 y 100 
 * que no se repitan y que no existan en el arreglo del segúndo parámetro.
 * @Author: Johan Gomez <johang0297@gmail.com>
 */
const random = (cantidad, arreglo) => {
    let numeros = [];
    let existe = false;
    for (let i = 0; i < cantidad; i++) {
        
        let numero = Math.floor(Math.random() * 100) + 1;

        for (let j = 0; j < arreglo.length; j++) {
            if (numero == arreglo[j]) {
                existe = true;
                break;
            }
        }

        if(numeros.indexOf(numero) != -1){
            existe = true;
        }

        if (!existe){
            numeros.push(numero);
        }
        else {
            i--;
        }
        existe = false;
    }
    return numeros;
}

console.log(random(7, [1, 2, 3, 4, 42]));	