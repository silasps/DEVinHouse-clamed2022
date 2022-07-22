// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento  e diretor. Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

class Filme {
    nome;
    anoDeLancamento;
    diretor;
}

const novoFilme = new Filme();
    novoFilme.nome = "Sonic 2";
    novoFilme.anoDeLancamento = 2022;
    novoFilme.diretor = "Jeff Fowler";

console.log(novoFilme);