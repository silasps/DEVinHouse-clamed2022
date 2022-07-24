// Crie uma classe chamada **Serie** com os seguintes atributos: *nome*, *anoLancamento*, *qttTemporada*. 

//  - Construa o construtor dessa classe com todos os atributos.
//  - Após isso, com um laço de repetição a sua escolha, instancie a classe 4 vezes com os dados sendo capturados por um prompt e depois adicione a classe a um array chamado series.
//  - Após isso imprima no documento (usando o innerHTML) a série mais antiga (ou seja, a que possui o menor anoLancamento). 
//  - Para percorrer o array com as 4 classes utilize o forEach.

class Serie{
    nome;
    anoLancamento;
    qttTemporada;
    
    constructor(nome, anoLancamento, qttTemporada){
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.qttTemporada = qttTemporada;
    }
}
let anoMaisAntiga, nomeAntigo;

for(let i = 0; i < 2; i++){
    let nome = window.prompt(`Digite o nome da ${i+1}ª série.`);
    let anolancamento = parseInt(window.prompt("Digite o ano de lançamento da série."));
    let qttTemporada = parseInt(window.prompt("Digite a quantidade de temporadas da série."));

    // Instanciar a classe 4 vezes
    const serie = new Serie(nome, anolancamento, qttTemporada);

    if(i == 0){ // Na primeira rodada o valor do primeiro lançamento é inserido
        anoMaisAntiga = serie.anolancamento;
        nomeAntigo = serie.nome;
    } else if(serie.anolancamento < anoMaisAntiga){
        anoMaisAntiga = serie.anoLancamento;
        nomeAntigo = serie.nome;
    }
}

let tagH1 = document.getElementById("h1");

tagH1.innerHTML += nomeAntigo;
console.log(nomeAntigo)