var nota1 = parseFloat(window.prompt("Digite a primeira nota."));
var nota2 = parseFloat(window.prompt("Digite a segunda nota."));



var notaTotal = nota1 + nota2;

document.write("<h1> Sua nota é " + notaTotal + "</h1>");

if (notaTotal >= 7 && notaTotal < 10) {
  document.write("<h2>Aprovado</h2>");
} else if (notaTotal < 7) {
  document.write("<h2>Reprovado</h2>");
} else if (notaTotal == 10) {
  document.write("<h1>Você arrasou. Aprovado com excelência.</h1>");
} 
