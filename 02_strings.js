// a - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Ejercicio 2-a');
var stringLowerCase = 'Mi pueblo se llama San Vicente';
var stringUpperCase = stringLowerCase.toUpperCase();
console.log(stringUpperCase);

/* b - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
        los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Ejercicio 2-b');
var normalString = 'Diego Armando Maradona';
var fiveCharString = normalString.substring(0,5);
console.log(fiveCharString);

/* c - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
        string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
        
console.log('Ejercicio 2-c');
var normalString2 = 'Diego Armando Maradona';
var lastThreeChar = normalString.substring(normalString2.length - 3 , normalString2.length);
console.log(lastThreeChar);

/* d - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula 
        y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
        
console.log('Ejercicio 2-d');
var longWord = 'valentin feraudo Haciendo EjerCIcIos';
var newLongWord = longWord.substring(0,1).toUpperCase() + longWord.substring(1,longWord.length).toLowerCase();
console.log(newLongWord);

/* e - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
        Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('Ejercicio 2-e');
var stringWithSpaces = 'Resultado debe ser 9';
var indexOfFirstSpace = stringWithSpaces.indexOf(' ');
console.log(indexOfFirstSpace);

/* f - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos
         de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y 
         las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('Ejercicio 2-f');
var longStringWithSpaces = 'valentin feraudo';
var newLongStringWithSpaces = longStringWithSpaces.substring(0,1).toUpperCase() + longStringWithSpaces.substring(1,longStringWithSpaces.indexOf(' ')).toLowerCase() + ' ' 
                                + longStringWithSpaces.substring(longStringWithSpaces.indexOf(' ') + 1, longStringWithSpaces.indexOf(' ') + 2).toUpperCase()
                                + longStringWithSpaces.substring(longStringWithSpaces.indexOf(' ') + 2, longStringWithSpaces.length).toLowerCase();
console.log(newLongStringWithSpaces);