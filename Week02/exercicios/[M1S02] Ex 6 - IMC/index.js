var imc;

var peso = parseFloat(window.prompt("Digite seu peso."));
var altura = parseFloat(window.prompt("Digite sua altura."));

imc = peso / (altura * altura);

if (imc >= 25) {
  window.alert(
    `Seu imc é ${imc.toFixed(
      1
    )}. \n Você está acima do peso, procure um médico.`
  );
} else if (imc > 18.5 && imc < 24.9) {
  document.write(
    `<h1>PARABÉNS!! </br></br> Seu imc = ${imc.toFixed(
      1
    )}. </br></br> Você está no peso ideal.</h1>`
  );
} else {
  document.write(
    `<h1>Seu imc = ${imc.toFixed(1)}. </br></br> Você está abaixo do peso, procure um médico.</h1>`
  );
}
