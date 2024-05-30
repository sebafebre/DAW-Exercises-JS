// Ejercicio a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

let texto1 = "Pasar a Mayusculas";
let textoMayusculas = texto1.toUpperCase();
console.log('Texto en mayúsculas:', textoMayusculas);

// Ejercicio b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let texto2 = "cincoLetras";
let primeros5Caracteres = texto2.substring(0, 5);
console.log('Primeros 5 caracteres:', primeros5Caracteres);

// Ejercicio c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let texto3 = "UltimosTres";
let ultimos3Caracteres = texto3.substring(texto3.length - 3);
console.log('Últimos 3 caracteres:', ultimos3Caracteres);

// Ejercicio d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let texto4 = "Mayusculas Minisculas";
let textoCapitalizado = texto4.substring(0, 1).toUpperCase() + texto4.substring(1).toLowerCase();
console.log('Texto capitalizado:', textoCapitalizado);

// Ejercicio e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

let texto5 = "Espacio en blanco";
let posicionEspacio = texto5.indexOf(' ');
console.log('Posición del primer espacio en blanco:', posicionEspacio);

// Ejercicio f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

let texto6 = "programacion avanzada";
let posicionEspacio6 = texto6.indexOf(' ');
let primeraPalabra = texto6.substring(0, posicionEspacio6);
let segundaPalabra = texto6.substring(posicionEspacio6 + 1);
let primeraPalabraCapitalizada = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase();
let segundaPalabraCapitalizada = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
let textoCapitalizado6 = primeraPalabraCapitalizada + " " + segundaPalabraCapitalizada;
console.log('Texto con ambas palabras capitalizadas:', textoCapitalizado6);
