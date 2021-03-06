// Crie uma aplicação com três inputs que receba um nome, link de imagem e descrição de um usuário. 
// Fazendo uso de módulos nativos do JS, exiba os valores recebidos em um card de usuário.

import imprimirDados from "./imprimirDados.js";

// Acessar elementos HTML
var botao = document.getElementById('botao-criar');
var inputNome = document.getElementById('input-nome');
var inputImagem = document.getElementById("input-imagem");
var inputDescricao = document.getElementById('input-descricao');
var formulario = document.getElementById('receber-dados');


// Acao do botao
botao.addEventListener('click', (event) => {
    // Esta acao nao permite recarregar a pagina
    event.preventDefault();
    // Colocar os dados acessados em variaveis
    var valorDoNome = inputNome.value;
    var valorDaImagem = inputImagem.value;
    var valorDaDescricao = inputDescricao.value;

    // inputNome.value = "";
    // inputImagem.value = '';
    // valorDaDescricao = '';


    imprimirDados(valorDoNome, valorDaImagem, valorDaDescricao);

    formulario.reset()
});


// funcao reaproveitavel para criar elemento
// function gerarTexto(minhaArray, minhaId, meuElemento){
//     var divget = document.getElementById(minhaId)
//     for(element of minhaArray){
//     let p = document.createElement('meuElemento);
//     p.innerHTML  = minhaArray;
//     divget.appendChild(p);
//     }
// }
// gerarTexto(minhaArray, "minha-div", "li")

// https://discord.gg/zMKUskgM