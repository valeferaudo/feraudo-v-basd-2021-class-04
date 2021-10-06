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
    
var stringWithSpaces = 'Resultado debe ser 9';
var indexOfFirstSpace = stringWithSpaces.indexOf(' ');

/* f - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos
         de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y 
         las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

var longStringWithSpaces = 'valentin feraudo';
var newLongStringWithSpaces = longStringWithSpaces.substring(0,1).toUpperCase() + longStringWithSpaces.substring(1,longStringWithSpaces.indexOf(' ')).toLowerCase() + ' ' 
                                + longStringWithSpaces.substring(longStringWithSpaces.indexOf(' ') + 1, longStringWithSpaces.indexOf(' ') + 2).toUpperCase()
                                + longStringWithSpaces.substring(longStringWithSpaces.indexOf(' ') + 2, longStringWithSpaces.length).toLowerCase();

// 3 - ARRAYS
/* a - Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
        mostrar por consola los meses 5 y 11 (utilizar console.log).*/
var monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthArray[4],monthArray[10]);

// b - Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

monthArray.sort();
console.log(monthArray)

// c - Agregar un elemento al principio y al final del array (utilizar unshift y push).
monthArray.unshift('Primer');
monthArray.push('Ultimo');

// d - Quitar un elemento del principio y del final del array (utilizar shift y pop).
monthArray.shift();
monthArray.pop();

// e - Invertir el orden del array (utilizar reverse).

// monthArray.reverse();

// f - Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var monthString = monthArray.join('-');

// g - Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthArray2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sliceArray = monthArray2.slice(monthArray2.indexOf('Mayo'),monthArray2.indexOf('Noviembre') + 1);

// 4 - IF ELSE
/* a - Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
        si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
var x = Math.random();
if (x >= 0.5){
        window.alert('Greater than 0.5');
} else {
        window.alert('Lower than 0.5');
}

/* b - Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
        “Bebe” si la edad es menor a 2 años;
        “Nino” si la edad es entre 2 y 12 años;
        “Adolescente” entre 13 y 19 años;
        “Joven” entre 20 y 30 años;
        “Adulto” entre 31 y 60 años;
        “Adulto mayor” entre 61 y 75 años;
        “Anciano” si es mayor a 75 años. */

var age = Math.floor(Math.random() * 100);
if (age < 2){
        window.alert('Bebe');
}
else if (age >= 2 && age <= 12){
        window.alert('Niño');
}
else if (age >= 13 && age <= 19){
        window.alert('Adolescente');
}
else if (age >= 20 && age <= 30){
        window.alert('Joven');
}
else if (age >= 31 && age <= 60){
        window.alert('Adulto');
}
else if (age >= 61 && age <= 75){
        window.alert('Adulto mayor');
}
else if (age > 75){
        window.alert('Anciano');
}

// 5 - FOR
/* a - Crear un array que contenga 5 palabras y 
        recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var names = ['Valentin', 'German', 'Eugenio', 'Baltazar', 'Agustin'];
for (let i = 0; i < names.length; i++) {
        window.alert(names[i]);
}

// b - Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var names2 = ['valentin', 'german', 'eugenio', 'baltazar', 'agustin'];
for (let i = 0; i < names2.length; i++) {
        window.alert(names[i].substring(0,1).toUpperCase() + names[i].substring(1,names[i].lenght));
}

