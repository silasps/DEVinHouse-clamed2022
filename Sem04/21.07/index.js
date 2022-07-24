// let jogos = [
//     "Valorant", 
//     "Pacman", 
//     "Super Mario",
//     "Cs Go", 
//     "Fifa",
//     "The last of us",
//     "LoL",
//     "GTA",
//     "Minecraft"
// ];


// jogos.forEach(function(item, indice){
//     debugger;
//     document.write("<h3> Item:" + item + "</h3>");
//     document.write("<h3> Indice:" + indice + "</h3>");
// });


// let jogos = [
//     {
//         nome: "Valorant",
//         modo: "FPS"
//     },
//     {
//         nome: "Valorant",
//         modo: "FPS"
//     },
//     {
//         nome: "CSGO",
//         modo: "FPS"
//     },
//     {
//         nome: "LOL",
//         modo: "moba"
//     },
//     {
//         nome: "Call of Duty",
//         modo: "FPS"
//     }
// ]

// jogos.forEach(function(item, indice){
//     // debugger;
//     document.write("<h3> Item:" + item.nome + "</h3>");
//     document.write("<h3> Indice:" + indice + "</h3>");
// });


// ==================================================

// Exercício em sala

// Em grupos e utilizando o laço de interação foreach execute uma função que irá percorrer a seguinte lista de nomes:

// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];

// A cada item deverá ser verificado se o primeiro caractere é B, caso seja, adicione toda a string do item em um outro array.

//------------------------------------------------
// novoArray = [];
// var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"];

// names.forEach(function(item){
//     if(item[0] == "B"){
//         novoArray.push(item);
//     }
// });
// document.write(`<h3> Os nomes que começam com a letra "B" são: ${novoArray}.`);

// ================================================
// Filter


// const pares = jogos.filter(function (jogo){
//     return jogo.nome[0] == "C";
// });
// console.log(pares);



// =========================================================== //

// Exercício Arrays

// Observe o array abaixo:
// Apenas retorne os objetos que possuem a idade maior ou igual a 18 anos usando o .filter


// let array = [
//     {
//       nome: "Rayane",
//       sobrenome: "Cristina",
//       idade: 21
//     },
//     {
//       nome: "Carlos",
//       sobrenome: "Henrique",
//       idade: 17
//     },
//     {
//       nome: "Julio",
//       sobrenome: "Cesar",
//       idade: 19
//     },
//     {
//       nome: "Camila",
//       sobrenome: "Fernandes",
//       idade: 18
//     },
//     {
//         nome: "Julia",
//         sobrenome: "Fernandes",
//         idade: 10
//       },
//       {
//         nome: "Bruno",
//         sobrenome: "Albuquerque",
//         idade: 31
//       },
//       {
//         nome: "Túlio",
//         sobrenome: "Bastos",
//         idade: 22
//       },
//       {
//         nome: "Cristiane",
//         sobrenome: "Maria",
//         idade: 41
//       },
//     ]

// Minha solucao
// const maioridade = array.filter(function (maior18){
//     return maior18.idade >= 18;
    
// });
// console.log(maioridade);

// Solucao Professora

// let arrayMaiores = array.filter(function (item){return item.idade >= 18;});

// console.log(arrayMaiores);


// ====================================================== //

// FIND - Retorna apenas o primeiro elemento que satisfaz a condição

// const numeros = [1, 2, 3, 4];
// const par = numeros.find((numero) => numero % 2 === 0);

// console.log(par);


// Exercício sobre Find - Slide 09

// Usando o array retornado após o .filter do ultimo exercicio, imprima em uma tag h1 qual o nome e sobrenome da primeira pessoa que possua idade maior que 30 anos.

// let maiorQueTrinta = maioridade.find(function (item){
//     return item.idade > 30;
// });

// document.write(`<h1>${maiorQueTrinta.nome}, ${maiorQueTrinta.sobrenome}</h1>`);


// =================================================================//

// MAP: acessa cada elemento e faz uma ação

// Trocar o sobrenome de todas as pessoas no array de objetos acima
// let array2 = array.map(function (item){
//     item.sobrenome = " Silva";
// });

// console.log(array);

// Exercício em sala - Enviar no Slack

// Usando o array no slide 06 faça um filtro com o .filter mas dessa vez retornando os objetos que possuam idade menor que 18 anos. 

// Com esse array de objetos filtrado, agora use o .map para criar uma nova chave chamada anosParaMaioridade sendo seu valor a quantidade de anos que falta para o usuário completar 18 anos. 

// Dica: anosParaMaioridade irá receber 18 - idade;








// =================================================================//

// SOME: Testa se ao menos um dos elementos passa no teste e retorna TRUE ou FALSE



// =================================================================//

// EVERY: Testa se todos os elementos do array passam pelo teste implementado pelo funçåo fornecida e retorna TRUE ou FALSO.


// =================================================================//

// SORT: Ordena os elementos do proprio array e retorna o array. A ordenacao segue o padrao da pontuacao de codigo unicode

// const numeros = [4, 1, 2, 3];
// const ordenado = numeros.sort((a, b) => a - b); //a - numero atual, b - proximo numero
// console.log(ordenado);

// ========================================================= //

// REDUCE:

// const array = [1, 2, 3, 4];
// const valorInicial = 0;
// const soma = array.reduce(
//   function (valorAnterior, valorAtual){
//   debugger;
//   return valorAnterior + valorAtual;
//   },
//   valorInicial
// );
// // 0 + 1 + 2 + 3 + 4
// console.log(soma);//10

// ------------------------------------------------------

// Exercício em sala - Slide 17 - REDUCE

// Observando o array abaixo e usando o reduce, encontre qual é o item que possui o maior valor.

// Dica: se o item atual for maior que o valor anterior, o valor anterior irá passar a ser o item atual.


// let maiorValor = array.reduce(function (){}, /*valor inicial*/ valorInicial)

const array = [1, 22, 31, 40, 3, 5];
const valorInicial = 0;
const maiorValor = array.reduce(function (valorAnterior, valorAtual){
    debugger;
    if (valorAtual>valorAnterior){
        valorAnterior = valorAtual;
        console.log(array.indexOf(valorAnterior).value);
    }
    debugger;
  return valorAnterior;
  },
valorInicial
);

console.log(maiorValor);


// // =================
// foreach 8

// series.forEach(function(item,i){
//   if (series[i].anoLancamento <serieMaisAntiga){
//     serieMaisAntiga = item.anoLancamento
//   }
// });