// Crie uma função que recebe um array de strings 
// e retorne a maior string do array.

// #exemplo de array de strings:

// const estados = ['Sao Paulo', 'Rio de Janeiro', 'Amazonas', 'Pernambuco', 'Santa Catarina', 'Rio Grande do Norte', 'Sergipe']

// function maiorString(array) {
//     let longest = '';
//     array.forEach(item => {
//         if (item.length > longest.length) {
//             longest = item;
//         }
//         return longest
//     });
// }

// console.log(maiorString(estados))


// function maiorStringDoArray(array) {
//     let maiorString = '';
//     for(let item of array){
//         if(item.length > maiorString.length){
//             maiorString = item;
//         }
//     }
//     return maiorString;
// }

// console.log(maiorStringDoArray(estados))

// ===================================

// Crie uma função que recebe um array e 
// devolve seus valores de forma invertida (de trás pra frente)

// const array = [1, 2, 3, 4, 5]

// function arrayReverse(array) {
//     return array.reverse()
// }

// console.log(arrayReverse(array))

// ==================================
// Outra forma

// var myArray = ['um', 'dois', 'tres'];
// myArray.reverse();
// console.log(myArray) // ['tres', 'dois', 'um']

// ==================================
// Outra forma

// function invertArray(array) {
//     let arrayInvertido = [];
//     for(let i = array.length - 1; i >= 0; i--) {
//         arrayInvertido.push(array[i]);
//     }
//     return arrayInvertido
// }

// const arrayDeNumeros = [1, 2, 3];
// console.log(invertArray(arrayDeNumeros));

// const arrayDeLetras = ['a', 'b', 'c', 'd', 'e'];
// console.log(invertArray(arrayDeLetras));

// ====================================================

// ----------------------Callback----------------------

// Crie um site com um botão que espera receber
// um evento de click e uma função callback
// que informe ao usuário que o botão foi clicado.

// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2');

// function clicarBotao() {
//     console.log("O botao foi clicado.");
// }

// btn.addEventListener('click', clicarBotao)

// btn2.addEventListener('click', clicarBotao)


// btn.addEventListener('click', function(){
//     console.log('O botao foi clicado')
// })

// =========================================

// Crie 2 funções, ambas recebem um número 
// e retorna true ou false:
// a primeira  verifica se é par
// a segunda verifica se é ímpar

// Em seguida crie uma função que recebe como parâmetros: 
// um array de números e uma função callback.
// A função principal deverá ser capaz de filtrar os números 
// e retornar um array de números filtrados 
// (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.

function verificaSeEPar(numero) {
    if(numero % 2 == 0){
        return true;
    }
}

function verificaSeEImpar(numero) {
    if(numero % 2 != 0){
        return true;
        }
    }
    
var arrayPares=[]
var arrayImpares=[]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const filtroParImpar = array.filter(item => {
    if (verificaSeEPar(item) == true) {
        return arrayPares.push(item);
    } else {
        arrayImpares.push(item);
    }
});

// Retorno Pares com Callback
console.log(`Estes são os nums pares: ${filtroParImpar}`);

// Retorno Ímpares somente no log
console.log(`Estes são os nums ímpares: ${arrayImpares}`);