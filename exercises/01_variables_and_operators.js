// a - Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
console.log('Ejercicio 1-a');
var num1 = 5;
var num2 = 10;
var total = num1 + num2;
console.log('El resultado de la suma es: ',total);

// b - Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Ejercicio 1-b');
var _name = 'Valentín';
var lastName = 'Feraudo';
var nameLastName = _name + lastName;
var nameLastNameSplit = `${_name} ${lastName}`
console.log(nameLastName);
console.log(nameLastNameSplit);
/* c - Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
        guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('Ejercicio 1-c');
var firstWord = 'Diego';
var secondWord = 'Maradona';
var totalChar = firstWord.length + secondWord.length;
console.log(totalChar);