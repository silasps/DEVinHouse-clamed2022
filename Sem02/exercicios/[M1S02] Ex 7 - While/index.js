var contador = 0,
  resposta,
  qtdRuim = 0;

while (contador < 4) {
  resposta = window.prompt(
    "Qual a sua classificação para a série Stranger Things?"
  );

  switch (resposta) {
    case "ruim":
      qtdRuim++;
      break;
    case "bom":
      break;
    case "excelente":
      break;
    //Configuração para não aceitar respostas diferentes do solicitado  
    default:
      window.alert("Este valor não é aceito. Digite 'ruim', 'bom' ou 'excelente'");
      contador--;
  }
  contador++;
}

console.log(`Quantidade de avaliações "Ruim": ${qtdRuim}`);
