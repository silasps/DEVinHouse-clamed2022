// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá pegar o nome do pokemon e ao apertar no botão pesquisar irá fazer a mesma requisição construída anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as habilidades do pokémon (observe a propriedade abilities).

var botao = document.getElementById('pesquisar');
var informacoes = document.getElementById('info');

botao.addEventListener('click', () => {
var input = document.getElementById('input').value.toLowerCase();
    
const myRequest = new XMLHttpRequest(); // Criar uma requisicao
    
    myRequest.onload = () => {
        
        var imagem = document.getElementById('imagem');
        var lista = document.getElementById('lista');
        

        imagem.setAttribute("src", myRequest.response.sprites.front_default);
        
        informacoes.innerHTML += `<h3>${myRequest.response.name.toUpperCase()}</h3>`;
        informacoes.innerHTML += `<p>Height: ${myRequest.response.height}</p>`;
        informacoes.innerHTML += `<p>Weight: ${myRequest.response.weight}</p>`;
        informacoes.innerHTML += `<br><h4>Abilities</h4><br>`;
        
        myRequest.response.abilities.forEach(item => {
            let ability = item.ability.name;
            informacoes.appendChild(lista);
            let novoItem = document.createElement('li');
            lista.appendChild(novoItem);
            novoItem.innerHTML += ability;
        });
    }
    
    myRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${input}`);
    
    myRequest.responseType = "json";
    
    myRequest.send();
})