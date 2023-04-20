/* Tipos de datos
Primitivos
    Numericos (int y double) - 10 y 0.8
    Strings - hola mundo
    Boolean - true y false
    Char - H
Complejos
    Objetos {}
    Arreglos []


Fuertemente tipado
Que el lenguaje de programa requiere saber explicitamente el tipo de dato al momento de 
crear una variable.
Ejemplo (java):
int numero = 10;
double numeroDecimal = 22.75;
String myName = "montoya";
double numeroDecimal = 22.75;
char myInitial = 'M';
boolean flag = true;

// error
flag = 22.77;
flag = "juanito banana"

Debilmente tipado
Significa que el lenguaje interpreta el tipo de dato y no requiere que se defina explicitamente
Ejemplo (javascript):
var number = 6;
*/
/*
var numberSix = 6;
var decimalNumber = 22.75;
var myName = "montoya";
var myInitial = "M";
var flag = true;
// OK
flag = 22.77;
flag = "juanito banana";

/*
Tipos complejos

Objects*/
/*
var video ={
    name:"parches",
    autor:"jack black",
}

console.log(video);
console.log(video.name);
console.log(video.autor);
//Arrays
var comments = [
    "El video es buenardo",
    "A mi no me gusta",
    "todos somos browsers",
];*/

var video = {
    name: 'peaches',
    author: 'jack black',
    comments: [
        'el video es buenardo', // [0]
        'a mi no me gusto', // [1]
        'todos somos browser', // [2]
    ]
}

console.log(video.comments[1]); // a mi no me gusta


var celular = {
    brand: 'xaomi',
    price: 2000,
    hasStock: true,
    company: { name: 'xaomi company', address: { street: "callesita no.4" } }
}
console.log(celular.company.address);
// imprimir si hay piezas disponibles de celular
console.log(celular.hasStock)


var data = [45, 67, 12, { qualifications: [10, 9 , 0] }, false, 23.77 ]


// imprimir la segunda calificacion
console.log(data[data.length-2])

console.log(video.comments[1]);




// imprimir la marca del celular
// imprimir el ultimo comentario del video
console.log(video.comments[video.comments-1])


