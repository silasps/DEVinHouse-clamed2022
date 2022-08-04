VAR // Variavel de funcao (Pode ser acessada de qualquer lugar dentro de uma mesma funcao, mesmo que esteja internalizada em outro escopo nesta funcao)

// ====== EXEMPLO VAR ====== //
function exemploVar() {
    if (true) {
        var numero = 10;
        console.log(numero); //10
    }
    console.log(numero); //10
}

exemploVar();

// ================================ //
LET // Variavel de escopo (So pode ser acessada dentro de um escopo especifico)

// ====== EXEMPLO LET ====== //
function exemploLet() {
    if (true) {
        let numero = 10;
        console.log(numero); //10
    }
    console.log(numero); //undefined
}

exemploLet();

// ================================ //
CONST /* Variavel de escopo que nao pode ter seu valor alterado, por isso precisa ser, obrigatoriamente, inicializado em sua declaracao
Se esta constante for um objeto ele pode ter o seu estado alterado.*/

// ====== EXEMPLO CONST ====== //
function exemploConst() {
    if (true) {
        const numero = 10;
        console.log(numero); //10
        // numero = 11; //TypeError: Assignment to constant variable.
    }
    console.log(numero); //undefined
}

exemploConst();