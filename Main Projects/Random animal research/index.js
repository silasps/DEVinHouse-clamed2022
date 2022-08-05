// ======= Exercicio do ZOO ANIMAL com Fetch ========= //

// Vamos utilizar a api zoo Animal para fazer um mini relatório sobre animais. O fluxo da aplicação consiste em ao carregar a tela ele deve trazer a imagem, o nome, o peso mínimo e o habitat de um animal aleatório.
// Observações:
// A chamada GET deverá ser feita para a url https://zoo-animal-api.herokuapp.com/animals/rand 
// Para carregar a imagem obtenha a tag html img e no seu atributo src defina que ele será igual a propriedade image_link do objeto vindo do backend.
// O nome será a propriedade name, o peso mínimo será weight_max e o habitat é o habitat


var botao = document.getElementById('btn');
var main = document.getElementById('main');
var imagem = document.getElementById('imagem');

botao.addEventListener('click', () => {
    main.innerHTML = "";
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
        main.innerHTML += `<br>Nome: ${response.name}`;
        main.innerHTML += `<br>Se alimenta de: ${response.diet}`;
        main.innerHTML += `<br>Habitat: ${response.habitat}`;
        main.innerHTML += `<br>Encontrado em: ${response.geo_range}`;
    }).catch((err)=>{
        console.error(err)
    });
})