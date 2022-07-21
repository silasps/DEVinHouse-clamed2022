
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

// var rua = "Rua 123"
// class Endereco{
//     rua = "Rua dos amores";
//     cep;
//     numero;
//     bairro;

//     validaCEP(){
//         console.log(this.rua); // this. é utilizado para chamar um atributo interno da classe. Se não tiver o this o código busca a variável global "rua"
//     }
// }

// Instanciando, inicializando uma classe
// let casa = new Endereco();
// casa.bairro = "Cavelaeiro"
// casa.validaCEP();

// class Funcionario{
//     nome;
//     nomeMae;
//     nomePai;
//     idade;
//     cpf;
//     cargo;
// }

// class Empresa{
//     telefone;
//     cnpj;
//     endereco;
//     qttFuncionarios;
//     setores;
//     nome;
//     cargo;
// }



// ================================================ //

// class Jogo{
//     nome;
//     categoria;
//     anoDeLnacamento;
//     tamanho;
// }

// // Instanciando a classe Jogo
// const game = new Jogo();

// game.nome = "Valorant";
// game.categoria = "FP5";
// game.anoDeLancamento = 2020;
// game.tamanho = "9GB";

// console.log("Depois ", game);

//=================================================// 

// CONSTRUCTOR

// class Pessoa{
//     nome;
//     idade;
//     cpf;
//     cnh;
    
//     constructor(nome, idade, cpf){
//         this.nome = nome;
//         this.idade = idade;
//         this.cpf = cpf;
//     }
// }

// let nome = undefined;
// if(nome){
//     alert("Errou");
// }else{
//     const alunoSenai = new Pessoa("Fernando", 24, "123456789");
//     console.log(alunoSenai);
// }


// ===========================================
// Exercício em sala

// Em equipe criem uma classe com constructor iniciando todos os atributos da classe e métodos referentes a um determinado objeto. 
// Exemplo:

class Moto{
	modelo;
	ano;
	cor;
    cilindrada;
    quitada;
    km;
	
	constructor(modelo, ano, cor, cilindrada, quitada, km){
	this.modelo = modelo;
	this.ano = ano;
	this.cor = cor;
    this.cilindrada = cilindrada;
    this.quitada = quitada;
    this.km = km;
}


// dirigir(){}
// parar(){}
// frear(){}
// lavar(){}
}

    const honda = new Moto("CB600", 2020, "Preta", 600, "Sim", 10000);
    console.log(honda);

