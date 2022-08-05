// ======== PESQUISA CEP ====== //

// Utilizando a api do via cep e também o modo de comunicação XMLHTTPREQUEST crie uma função para que a partir de um cep mostre o bairro, logradouro e localidade em tela…
// Observações: 
// O cep a ser passado para a url https://viacep.com.br/ws/{cepAqui}/json/  deve ser passado através de um input.
// Para iniciar a função que irá fazer a requisição use um botão com o evento de click
// O método HTTP será “GET” para a url dada no ponto 1
// Lembre que para pegar a resposta vinda do endpoint será através do atributo response.
// Além disso o responseType deverá ser igual  “json”.


// ======= PROJETO COM XMLHttpRequest ====== //

// ==== Acessar botao ==== //
// var botao = document.getElementById('btn');
// var main = document.getElementById('main');

// botao.addEventListener('click', () => {
//     var input = document.getElementById('cep-entrada').value;
//     console.log(input)

//     const = new XMLHttpRequest(); // Criar uma requisicao - Este comando dever ser primeiro
    
//     onload = () => {
//         // console.log(response.weight); // para imprimir um item direto
//         console.log(response);
//         main.innerHTML += `<br><br>Bairro: ${response.bairro}`;
//         main.innerHTML += `<br>Logradouro: ${response.logradouro}`;
//         main.innerHTML += `<br>Localidade: ${response.localidade}`;
//     }
    
//     open("GET", `https://viacep.com.br/ws/${input}/json/`);
//     responseType = "json";
    
//     send(); // Este comando deve ser por ultimo


// });


// ======= Projeto com Fetch ========= //

var botao = document.getElementById('btn');
var info = document.getElementById('info');

botao.addEventListener('click', () => {
    var input = document.getElementById('cep-entrada').value;
    info.innerHTML = "";
    
    // Fetch
    const options = {
        method: "GET",
        header: {'contentType': 'application/json'},
    }
    
    fetch(`https://viacep.com.br/ws/${input}/json/`, options)
    .then((response)=>{
        return response.json(); // o .json() transforma a requisicao em JSON
    }).then((response)=>{ // o segundo .then e para trazer o response em formato de json
        info.innerHTML += `<br><br>Bairro: ${response.bairro}`;
        info.innerHTML += `<br>Logradouro: ${response.logradouro}`;
        info.innerHTML += `<br>Localidade: ${response.localidade}`;
    }).catch((err)=>{
        console.error(err)
    });
})

