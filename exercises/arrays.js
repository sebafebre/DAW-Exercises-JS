// Ejercicio a: Mostrar por consola los meses 5 y 11 (utilizar console.log).
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5:', meses[4]);  // Indice 4 corresponde al mes 5 (Mayo)
console.log('Mes 11:', meses[10]);  // Indice 10 corresponde al mes 11 (Noviembre)

// Ejercicio b: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
let mesesOrdenados = meses.slice().sort();  // slice() para copiar el array antes de ordenar
console.log('Meses ordenados alfabéticamente:', mesesOrdenados);

// Ejercicio c: Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift('Inicio');
meses.push('Fin');
console.log('Array después de agregar elementos al principio y al final:', meses);

// Ejercicio d: Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift();
meses.pop();
console.log('Array después de quitar elementos del principio y del final:', meses);

// Ejercicio e: Invertir el orden del array (utilizar reverse).
let mesesInvertidos = meses.slice().reverse();  // slice() para copiar el array antes de invertir
console.log('Array invertido:', mesesInvertidos);

// Ejercicio f: Unir todos los elementos del array en un único string donde cada mes esté separado por un guión - (utilizar join).
let mesesUnidos = meses.join(' - ');
console.log('Array unido en un string:', mesesUnidos);

// Ejercicio g: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
let mesesMayoANoviembre = meses.slice(4, 11);  // Indice 4 es Mayo y 11 es Noviembre
console.log('Copia del array desde Mayo hasta Noviembre:', mesesMayoANoviembre);
