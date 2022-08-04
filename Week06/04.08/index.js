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
var botao = document.getElementById('btn');
var body = document.getElementById('body');

botao.addEventListener('click', () => {
    var input = document.getElementById('cep-entrada').value;
    console.log(input)

    const OReq = new XMLHttpRequest(); // Criar uma requisicao - Este comando dever ser primeiro
    
    OReq.onload = () => {
        // console.log(OReq.response.weight); // para imprimir um item direto
        console.log(OReq.response);
        body.innerHTML += `<br><br>Bairro: ${OReq.response.bairro}`;
        body.innerHTML += `<br>Logradouro: ${OReq.response.logradouro}`;
        body.innerHTML += `<br>Localidade: ${OReq.response.localidade}`;
    }
    
    OReq.open("GET", `https://viacep.com.br/ws/${input}/json/`);
    OReq.responseType = "json";
    
    OReq.send(); // Este comando deve ser por ultimo


});



// ===================
// function(){

// 	const cep = document.querySelector("input[name=cep]");
  
//   cep.addEventListener('blur', e=> {
//   		const value = cep.value.replace(/[^0-9]+/, '');
//       const url = `https://viacep.com.br/ws/${value}/json/`;
      
//       fetch(url)
//       .then( response => response.json())
//       .then( json => {
      		
//           if( json.logradouro ) {
//           	document.querySelector('input[name=rua]').value = json.logradouro;
//             document.querySelector('input[name=bairro]').value = jso