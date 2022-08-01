const btn01 = document.getElementById('btn01');

btn01.addEventListener("click", function() {
    if (input.value != ''){
    const input = document.getElementById("input");
    const lista = document.getElementById("listaBrinquedos");
    var novoItem = document.createElement('li');
    lista.appendChild(novoItem);
    novoItem.innerHTML += (input.value);
    input.value = '';
    } else {
        window.alert('Insira dados no campo "input" antes de clicar no botão');
    }
});