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
    // console.log(event);
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