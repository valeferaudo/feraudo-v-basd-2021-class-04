/* a - Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, 
        mostrando el valor de dicha variable en la consola del navegador.*/

console.log('Ejercicio 6-a');
function suma(num1, num2) {
    return num1 + num2;
}
var result = suma(5,16);
console.log(result);
    
/* b - A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
        mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('Ejercicio 6-b');
function sumaValidator(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        console.log('Un parámetro tiene error');
        return NaN;
    }
    else{
        return num1 + num2;
    }
}
var result1 = sumaValidator('a',16);
console.log('No número, resultado: ',result1);
var result2 = sumaValidator(16,16);
console.log('Con número, resultado: ',result2);
    
// c - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num){
    return num % 1 === 0;
}
console.log(validateInteger(10));
console.log(validateInteger(10.4568));
    
/* d - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
        En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('Ejercicio 6-d');
function sumaValidator2(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return NaN;
    }
    else{
        num1 = validateDecimal(num1);
        num2 = validateDecimal(num2);
        return num1 + num2;
    }
}
function validateDecimal(num) {
    if(num % 1 !== 0){
        console.log(`El numero ${num} tiene decimales. Su redondeado es ${Math.round(num)}`);
        return Math.round(num);
    }else{
        return num
    }
}
console.log(sumaValidator2(1.5,5));
console.log(sumaValidator2(25,5.5));
console.log(sumaValidator2(10,5));

// e - Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
    
console.log('Ejercicio 6-e');
function sumaValidator3(num1, num2) {
    if (validateNumber(num1) || validateNumber(num2)){
        return NaN;
    }
    else{
        return num1 + num2;
    }
}
function validateNumber(num) {
    return typeof(num) !== 'number';
}
var result = sumaValidator3('a',16);
console.log(result);
var result = sumaValidator3(16,16);
console.log(result);