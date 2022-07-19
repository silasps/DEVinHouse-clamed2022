const btn01 = document.getElementById('btn01')

btn01.addEventListener("click", function(){
    const itemLista = document.getElementById('input');
    var newElement = document.createElement ('li');
    var lista = document.querySelector ('listaBrinquedos');
    var texto = documento.createTextNode (itemLista.value);
    newElement.appendChild(texto);
    lista.innerHTML += (newElement);
});