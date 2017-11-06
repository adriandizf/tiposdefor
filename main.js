/**
 *@file Funciones for funcioneamiento
 * @author Adrian Diz
 * @version 1.0
 */

/**
 * @description sumaArray Suma los valores de un array.
 *@param {Array} numeros Array con una secuencia de numeros.
 *@return {Number}
 */
function sumaArray(numeros) {
    let suma = 0;
    for (let a of numeros) {
        suma = suma + a;
    }
    return suma;
};

/**
 * @description sumaArray Suma los valores de un array.
 *@param {Array} numeros Array con una secuencia de numeros.
 *@return {Number}
 */
function sumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos];
    }
    return suma;
};
function sumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
};
console.log(sumaArray([1, 2, 3, 5, 7, 8, 9, 4, 23, 4235, 5, 6]));
console.log(sumaArray2([1, 2, 3, 5, 7, 8, 9, 4, 23, 4235, 5, 6]));
console.log(sumaArray3([1, 2, 3, 5, 7, 8, 9, 4, 23, 4235, 5, 6]));