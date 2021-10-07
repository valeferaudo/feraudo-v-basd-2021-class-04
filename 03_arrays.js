/* a - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
        mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('Ejercicio 3-a');
var monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthArray[4],monthArray[10]);
        
// b - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
        
console.log('Ejercicio 3-b');
monthArray.sort();
console.log(monthArray)
        
// c - Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Ejercicio 3-c');
monthArray.unshift('Primer');
monthArray.push('Ultimo');
console.log(monthArray);

// d - Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Ejercicio 3-d');
monthArray.shift();
monthArray.pop();
console.log(monthArray);

// e - Invertir el orden del array (utilizar reverse).

console.log('Ejercicio 3-e');
var monthArrayReverse = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthArrayReverse.reverse());

// f - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Ejercicio 3-f');
var monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthString = monthArray.join('-');
console.log(monthString)

// g - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Ejercicio 3-g');
var monthArray2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sliceArray = monthArray2.slice(monthArray2.indexOf('Mayo'),monthArray2.indexOf('Noviembre') + 1);
console.log(sliceArray);