// Crie um código javascript que irá juntar os dois arrays abaixo e coloque esse array concatenado em outra variável:


//     let array1 = [1,3,4,5,3,7];
//     let array2 = [1,2,6,4,8,5];


//  - Após fazer a junção remova os itens que se repetem usando o .includes ou o .filter
//  - Após isso ordene por ordem crescente.

let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

// #Juntar os arrays
var arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado);

// #Remover os ítens repetidos
// Utilizando filter
const arraySemRepetidos = arrayConcatenado.filter(function(elemento, posicao){
    return arrayConcatenado.indexOf(elemento) == posicao;
});
console.log(arraySemRepetidos);

// Utilizando new Set
// var semRepetidos = [new Set(arrayConcatenado)]

// #Ordenar crescente
const arrayOrdenado = arraySemRepetidos.sort();
console.log(arrayOrdenado);