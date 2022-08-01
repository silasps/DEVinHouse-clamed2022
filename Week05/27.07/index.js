// +++++++++++++ Exercicio 1 ++++++++++++
// Utilize o if ternário para construir uma função 
// que recebe o número de dias e 
// retorna se o número pertence a primeira 
// ou a segunda quinzena


// const primOuSegQuinzena = numDia => numDia >= 16 ? '2ª Quinzena': '1ª Quinzena'

// console.log(primOuSegQuinzena(17));

// +++++++++++++ Exercicio 2 ++++++++++++
// Crie uma arrow function que receba um array 
// e localize o número de maior valor

// var array = [-10, -20, -30, -120, -1000];

// const localizarMaior = (array=[]) => {
//     var maior = array[0];
//     array.forEach(item => {
//         if (item > maior) {
//             maior = item;
//         }
//     });
//     return maior;
// }

// console.log(`O maior valor é ${localizarMaior(array)}`);

// +++++++++++++ Exercicio 3 ++++++++++++
// Crie uma arrow function que receba 2 arrays 
// e retorne um array contendo os dois

// var array1 = [-10, -20, -30, -120, -1000];
// var array2 = ['Silas', 'Glauco', 'Andre', 'Astor', 'Felipe', 'Eduardo', 'Kayra'];

// const juntarArrays = (lista1=[], lista2=[]) => lista1.concat(lista2)

// console.log(juntarArrays(array1, array2));

// +++++++++++++ Exercicio 4 ++++++++++++
// Crie uma arrow functions que ordena um array de números

// var arrayDeNumeros = [1, 3, 7, 9, 2, 5, 19, 18, 12];

// const ordenarArrays = (array) => array.sort((a,b) => a - b)

// console.log(ordenarArrays(arrayDeNumeros))

// +++++++++++++ Exercicio 5 ++++++++++++
// Crie uma arrow function que receba um número, 
// calcule sua raiz quadrada e 
// retorne um número inteiro positivo como resultado


// const calcularRaizQuadrada = (numero) => {
//     return Math.sqrt(numero).toFixed(0);
// }

// console.log(calcularRaizQuadrada(5))

// +++++++++++++ Exercicio 6 ++++++++++++
// Crie uma arrow function que receba uma string 
// e devolva um objeto com as informações: 
// * quantos caracteres a string possui
// * qual seu primeiro caracter 
// * e qual seu último caracter


const avaliarString = (texto) => { 
    const objeto = {        
    tamanho : texto.length,
    primeiraLetra : texto[0],
    ultimaLetra : texto[texto.length - 1]
    }
    console.log(objeto);
}

avaliarString('Perplexointorpigaitado');