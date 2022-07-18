const btn01 = document.getElementById('btn01')
const itemLista = document.getElementById('input');

btn01.addEventListener("click", function(){
    listaBrinquedos.appendChild(itemLista);
    itemLista.innerHTML += ('<li></li>');
});