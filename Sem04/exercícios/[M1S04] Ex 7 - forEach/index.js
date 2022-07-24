// Crie um código javascript para verificar se todos os alunos do array de objetos arrayAlunos abaixo estão acima da média que será 7.
// Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".

    let arrayAlunos = [
        {
            nome: "Carlos",
            media: 10
        },
        {
            nome: "Julia",
            media: 8
        },
        {
            nome: "Rayane",
            media: 6
        },
        {
            nome: "Arthur",
            media: 5
        }
    ]

var reprovados = [];
var aprovados = [];
var media = 7;

arrayAlunos.forEach(function (item) {
    if (item.media >= media) {
        aprovados.push(item);
    } else {
        reprovados.push(item);
    }
});

// Verificar a quantidade de aprovados e reprovados e imprimir na tela caso tenham reprovados
if (aprovados.length == arrayAlunos.length) {
    document.write("<h1>Parabéns a todos da turma.</h1>");    
} else {
    document.write(`<h1>Aluno(s) reprovado(s): \n\n <br></h1>`)
    reprovados.forEach(element => {
        document.write(`<br>nome: ${element.nome} <br> media: ${element.media}<br>`);
    });
}