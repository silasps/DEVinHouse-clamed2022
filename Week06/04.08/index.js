// ======== EXERCICIO EM SALA ====== //

// Utilizando a api do via cep e também o modo de comunicação XMLHTTPREQUEST crie uma função para que a partir de um cep mostre o bairro, logradouro e localidade em tela…
// Observações: 
// O cep a ser passado para a url https://viacep.com.br/ws/{cepAqui}/json/  deve ser passado através de um input.
// Para iniciar a função que irá fazer a requisição use um botão com o evento de click
// O método HTTP será “GET” para a url dada no ponto 1
// Lembre que para pegar a resposta vinda do endpoint será através do atributo response.
// Além disso o responseType deverá ser igual  “json”.
// ============================================== //

// ==== Acessar botao ==== //
// var botao = document.getElementById('btn');
// var body = document.getElementById('body');

// botao.addEventListener('click', () => {
//     var input = document.getElementById('cep-entrada').value;
//     console.log(input)

//     const = new XMLHttpRequest(); // Criar uma requisicao - Este comando dever ser primeiro
    
//     onload = () => {
//         // console.log(response.weight); // para imprimir um item direto
//         console.log(response);
//         body.innerHTML += `<br><br>Bairro: ${response.bairro}`;
//         body.innerHTML += `<br>Logradouro: ${response.logradouro}`;
//         body.innerHTML += `<br>Localidade: ${response.localidade}`;
//     }
    
//     open("GET", `https://viacep.com.br/ws/${input}/json/`);
//     responseType = "json";
    
//     send(); // Este comando deve ser por ultimo


// });

// ============ FETCH =========== //

// ====== Estrutura ========= //
// fetch(url, options)
// .then(function () {
//     // Seu codigo para lidar com os dados que voce obtem da API
// })
// .catch(funcao()) {
//     // Aqui e onde voce executa o codigo se o servidor retornar algum erro
// }
// ====================================== //


// ======= Exercicio do CEP com Fetch ========= //

// var botao = document.getElementById('btn');
// var body = document.getElementById('body');

// botao.addEventListener('click', () => {
//     var input = document.getElementById('cep-entrada').value;
    
//     // Fetch
//     const options = {
//         method: "GET",
//         header: {'contentType': 'application/json'},
//     }
    
//     fetch(`https://viacep.com.br/ws/${input}/json/`, options)
//     .then((response)=>{
//         return response.json(); // o .json() transforma a requisicao em JSON
//     }).then((response)=>{ // o segundo .then e para trazer o response em formato de json
//         body.innerHTML += `<br><br>Bairro: ${response.bairro}`;
//         body.innerHTML += `<br>Logradouro: ${response.logradouro}`;
//         body.innerHTML += `<br>Localidade: ${response.localidade}`;
//     }).catch((err)=>{
//         console.error(err)
//     });
// })

// ======= Exercicio do ZOO ANIMAL com Fetch ========= //

// Vamos utilizar a api zoo Animal para fazer um mini relatório sobre animais. O fluxo da aplicação consiste em ao carregar a tela ele deve trazer a imagem, o nome, o peso mínimo e o habitat de um animal aleatório.
// Observações:
// A chamada GET deverá ser feita para a url https://zoo-animal-api.herokuapp.com/animals/rand 
// Para carregar a imagem obtenha a tag html img e no seu atributo src defina que ele será igual a propriedade image_link do objeto vindo do backend.
// O nome será a propriedade name, o peso mínimo será weight_max e o habitat é o habitat


var botao = document.getElementById('btn');
var body = document.getElementById('body');
var imagem = document.getElementById('imagem');
//imprimirImagem.setAttribute("src",imagem);

botao.addEventListener('click', () => {
    // var input = documet.getElementById('animal-entrada');
    // Fetch
    const options = {
        method: "GET",
        header: {'contentType': 'application/json'},
    }
    
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand`, options)
    .then((response)=>{
        return response.json(); // o .json() transforma a requisicao em JSON
    }).then((response)=>{ // o segundo .then e para trazer o response em formato de json
        console.log(response)
        imagem.setAttribute("src", response.image_link);
    }).catch((err)=>{
        console.error(err)
    });
})