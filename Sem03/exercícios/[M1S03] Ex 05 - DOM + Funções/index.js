function criarDiv() {
  // Criando <div>
  const divCriada = document.createElement("div");
  for (let i=1; i<=5; i++) {
      divCriada.innerHTML += `Texto ${i}`;
      divPrincipal.appendChild(divCriada);
  }
}

criarDiv();

// Não consegui estilizar meus parágrafos criados
