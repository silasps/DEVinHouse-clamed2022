// ========= TEMPLATE STRING ========//


// Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string junte para a string abaixo.

// Eu, =nome= =sobrenome=, possuo =idade= anos, e nasci em =calculo do ano em que estamos - sua idade=.

// Exercicio template string

// var nome = window.prompt('Digite seu nome?');
// var sobrenome = window.prompt('Digite seu sobrenome');
// var idade = parseFloat(window.prompt('Digite sua idade'));
// var aniversario = window.confirm('Já fez aniversário?');

// if (aniversario == true) {
//     document.write(`<h1>Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade}.</h1>`);
// } else {
//     document.write(`<h1>Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade-1}.</h1>`);
// }


// ========== OPERADOR SPREAD ==========//

// Sem o operador Spred (...)
// let tagsH2 = document.getElementsByTagName('h2');
// console.log(tagsH2);

// function test(param1, ...otherParams){
//     return `OI ${param1}, sou eu, ${otherParams}`;

// }

// console.log(test('Rafael', ['Silas', 'cachorro', 'gato', 'coelho']));

// +++++ Exercicio Slide 7
// Pensando em passar uma função para aceitar um array de valores utilize o operador spread para transformar a função abaixo:

// function somaNumeros(numero1,numero2,numero3,numero4){
//     return numero1+numero2+numero3+numero4;
// }

// function somaNumeros(...valores) {
//     let somatorio = 0;
//     valores.map((valor)=>{
//         somatorio += valor;
//     })
//     return somatorio;
// }

// console.log(somaNumeros(12,34,56,42,10,15,121,58));


// +++++ Exercicio Slide 8

// Usando o Math.max e sabendo que ele espera uma cadeia de valores, verifique qual dos números internos ao array abaixo é o maior número. (Utilize o operador spread).

// o spread transforma uma array em numeros separados
// const numeros = [1, 32, 45, 2, 765, 311, 89];

// console.log(Math.max(...numeros));

// ===== exemplo com string ======//
// let filme = 'Codigo da Vinci';
// let filmeVazio = [];

// filmeVazio.push(...filme)
// console.log(filmeVazio);
// console.log(filme);
// console.log(...filme);

//=====

// let lista1 = ['teste2','teste3','teste4','teste5'];
// const listaUsuarios = [ teste1, ...lista1];

// console.log(listaUsuarios);

// +++++++++ Exercicio Slide 14
// Observe os objetos abaixo e junte-os no array de objetos animais utilizando o operador spread:

// Solucao 1
// const gato = { patas: 4, faz: 'miau' }
// const cachorro = { patas: 4, faz: 'auau' }
// const gato2 = {...gato, pelagem: 'branca'}

// const animais = [...[cachorro,gato2]];

// console.log(animais);

// Solucao 2
// const gato = { patas: 4, faz: 'miau' }
// const cachorro = { patas: 4, faz: 'auau' }
// const gato2 = {...gato, pelagem: 'branca'}


// const animais = [{gato2}, {cachorro}];
// console.log(...animais);

// const animais2 = [{...gato2}, {...cachorro}];
// console.log(...animais2);

// const animais3 = [{gato2}, {cachorro}];
// console.log(animais3);

// const animais4 = [{...gato2}, {...cachorro}];
// console.log(animais4);