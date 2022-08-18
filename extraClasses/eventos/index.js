const formId = document.querySelector("#formId");

formId.addEventListener('submit', (event) => {
    event.preventDefault(); //Prevenir o comportamento padrao do JS que e atualizar a pagina apos o eveto
    console.log('Foi enviado');
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;

    console.log(name, 'Nome digitado');
    console.log(lastName, 'Sobrenome digitado');
});

const firstFunction = () => {
    setTimeout(() => {
        alert('Página carregada');
});

window.onload = () => {
    firstFunction();
}
}