class Pessoa{
    nome;
    idade;
    cnh;
    #cpf;
    
    constructor(nome, idade, cnh, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.cnh = cnh;
        this.cpf = cpf;
    }

    // getters and setter
    get cpf(){
        return this.#cpf;
    }

    set cpf(cpf){
        this.#cpf = cpf;
    }
}

const alunoSenai = new Pessoa("Fernando", 24, "123456789");
console.log(alunoSenai);

const alunoCurso = new Pessoa();
alunoCurso.cnh = "wefef-243";
alunoCurso.nome = "Jonas";
alunoCurso.idade = 12;
alunoCurso.cpf = "123456789";

console.log(alunoCurso.cpf);

console.log(alunoCurso);

// ===================================
// Exercicio

// Imaginando uma classe chamada ContaBancaria faça a estrutura dela levando em consideração os seguintes atributos: nomeDono, saldo, numeroConta e agencia.
// Todos os atributos devem ser privados, mas que possam ser inicializados fora da classe, ou seja construa também seus métodos getters e setters.









// ============================
// METODOS ARRAY

let array = [
    {
        login: "silasps",
        senha: "holyholy"
    },
    {
        login: "silas7",
        senha: "holyholy"
    },
    {
        login: "deeper",
        senha: "holyholy"
    },
    {
        login: "montagem",
        senha: "holyholy"
    },
    {
        login: "izabela",
        senha: "holyholy"
    }
]

let array2 = [12,13,35,57,66];

// Nao e possivel usar indexOf com objetos
let indice = array.indexOf({
    login: "izabela",
    senha: "holyholy"
})

console.log(indice)

// Concatenando arrays
console.log(array.concat(array, array2))


// Verificar se algum ítem está incluso dentro da array - retorna true ou false
const arrayTeste = ["Pera","Banana","Abacaxi","Uva","Maçã"];
let fruta = "Maçã";
let fruta2 = "Morango";

console.log(arrayTeste.includes(fruta)); //Retorna true
console.log(arrayTeste.includes(fruta2)); //Retorna false
