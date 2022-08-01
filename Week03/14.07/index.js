const olaMundo = function() {
    console.log('Olá mundo')
}

// Sintaxe mais simples
//setTimeout(olaMundo, 2000)

// Com funcao interna nao nomeada
// setTimeout(function() {
//     console.log('Ola Mundo')
// })

// Sintaxe com +3 ou mais parametros
const olaMundo2 = function(aluno1 = "", aluno2 = "") {
    console.log(`Ola Mundo ${aluno1} e ${aluno2}`);
}
setTimeout(olaMundo, 5000, " Silas", "Eduardo");