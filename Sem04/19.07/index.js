
// let user = {
//     login: "silasps",
//     senha: "silas1234"
// }

// let array = [];

// console.log(Object.entries(user));

// console.log("chaves", Object.keys(user));
// console.log("login", user.login);

// ______________________________________________

// Caso const
// const usuario = {
//     nome: "Robson",
//     idade: 12
// };

// Acesso o objeto
// usuario.nome

// Isso é pode
// usuario.nome = 'Raquel'

// Isso não pode
// usuario = {
//     nome: "Raquel",
//     idade: 12
// }

// _____________________________________________

// Exemplo do slide

// let filme = {
//     nome: "Doutor Estranho no Multiverso da Loucura",
//     anoDeLancamento: 2022,
//     diretor: "Sam Raimi"
//   }
  
//   console.log(filme.diretor);


// _____________________________________________

// Exemplo de código para o slide 8
// let gabinete = {
//     cor: "Preto",
//     modelo: "Megazord",
//     memoriaRam: "20gb",
//     ssd: "1 PB",
//     os: "Windows",
//     marca: "Trasformers SX"
// };

// Como criar uma propriedade no meu objeto
// gabinete.nome = "XRT 19"

// Como deletar uma propriedade no meu objeto
// delete gabinete.ssd;


// OBJETO - { }
// let user = {
//     login: "silasps",
//     senha: "silas1234"
// }

// Forma de acesso
// user.login;


// ARRAY - [ ]
// let notas = [10, 8, 5, 9];

// Forma de acesso
// notas[0] //10


// Acessar uma array dentro do objeto
// let aluno = {
//     nome: "",
//     matricula: "",
//     notas: [10,2,4,6],
//     padding: {
//         top: 12,
//         bottom: 34,
//         left: 12,
//         right: 90
//     }
// }

// Uma boa prática é puxar a array para dentro de uma variável
// let arrayNotas = aluno.notas;

// console.log(arrayNotas[3]);

// Acessar o ítem de um objeto dentro de outro objeto
// console.log(aluno.padding.bottom);




// ================================================== //

// CLASSES

var rua = "Rua 123"
class Endereco{
    rua = "Rua dos amores";
    cep;
    numero;
    bairro;

    validaCEP(){
        console.log(this.rua); // this. é utilizado para chamar um atributo interno da classe. Se não tiver o this o código busca a variável global "rua"
    }
}

// Instanciando, inicializando uma classe
let casa = new Endereco();
casa.bairro = "Cavelaeiro"
casa.validaCEP();

class Funcionario{
    nome;
    nomeMae;
    nomePai;
    idade;
    cpf;
    cargo;
}

class Empresa{
    telefone;
    cnpj;
    endereco;
    qttFuncionarios;
    setores;
    nome;
    cargo;
}



// ================================================ //

class Jogo{
    nome;
    categoria;
    anoDeLnacamento;
    tamanho;
}

// Instanciando a classe Jogo
const game = new Jogo();

game.nome = "Valorant";
game.categoria = "FP5";
