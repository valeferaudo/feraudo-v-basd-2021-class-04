// 1 - Variables y Operadores
// a - Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var num1 = 5;
var num2 = 10;
var total = num1 + num2;


// b - Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

var _name = 'Valentín';
var lastName = 'Feraudo';
var nameLastName = _name + lastName;
var nameLastNameSplit = `${_name} ${lastName}`

/* c - Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
        guardando el resultado de la suma en una 3er variable (utilizar length). */

var firstWord = 'Diego';
var secondWord = 'Maradona';
var totalChar = firstWord.length + secondWord.length;


// 2 - Strings
// a - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var stringLowerCase = 'Mi pueblo se llama San Vicente';
var stringUpperCase = stringLowerCase.toUpperCase();

/* b - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
        los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var normalString = 'Diego Armando Maradona';
var fiveCharString = normalString.substring(0,5);

/* c - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
        string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var normalString2 = 'Diego Armando Maradona';
var lastThreeChar = normalString.substring(normalString2.length - 3 , normalString2.length);

/* d - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula 
        y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var longWord = 'valentin feraudo Haciendo EjerCIcIos';
var newLongWord = longWord.substring(0,1).toUpperCase() + longWord.substring(1,longWord.length).toLowerCase();

/* e - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
        Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
    
var stringWithSpaces = "Resultado debe ser 9";
var indexOfFirstSpace = stringWithSpaces.indexOf(' ');

