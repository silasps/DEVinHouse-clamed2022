// Crie uma aplicação com três inputs que receba um nome, link de imagem e descrição de um usuário. 
// Fazendo uso de módulos nativos do JS, exiba os valores recebidos em um card de usuário.

const receberDados = require('./receberDados')

receberDados (nome, imagem, descricao) {
var criarH1 = document.createElement('h1');
nome.appendChild(criarH1);
criarH1.innerHTML(nome.value);
}

document.getElementById('id').innerHTML = nome

// primeiro js
// //DOM
// //const receberNome = document.getElementById("inserirNome");
// //const receberLinkImagem = document.getElementById("inserirImagem");
// //const receberDescricao = document.getElementById("inserirDescrição");

// //const botaoCadastro = document.getElementById("botaoSubmeter");

// //div2
// //const nomeCard = document.getElementById("nomeCard");
// //const imagemCard = document.getElementById("imagemCard")
// //const descricaoCard = document.getElementById("descricaoCard")
// botaoCadastro.addEventListener("click", enviarInfo);

// //const enviarInfo = require('./cardEnviar.js');
// //Esta sendo importada
// function enviarInfo(){
//     let enviarNome = document.getElementById("inserirNome").value;
//     //let enviarLinkImagem = document.getElementById("inserirImagem").value;
//     let enviarLinkImagem = document.getElementById("inserirImagem").setAttribute('src',inserirImagem);
//     let enviarDescricao = document.getElementById("inserirDescrição").value;
// nomeCard.innerHTML = enviarNome;
//     //imagemCard.innerHTML = "<img src=" + enviarLinkImagem + "/>";
//     imagemCard.innerHTML = enviarLinkImagem;
//     descricaoCard.innerHTML = enviarDescricao;
// }
