// ### Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// ### Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// ### (ex: A quantidade informada foi _____, a de valores pares foi ___, e a de valores ímpares foi __)

function listaNumeros(arrayNumeros = []) {
    
    //Retorna qtd de pares
    function par(numeros) {
        var par;
        for (const item of numeros) {
            if (item % 2 == 0) {
                par += 1;
            }
        }
    return par;
    }

    //Retorna a qtd de ímpares
    function impar(numeros) {
        var impar
        for (const item of numeros) {
            if (item % 2 == 1) {
                impar += 1;
            }
        }
    return impar;
    }

    // Colocar os retornos em variáveis
    qtdPares = par(arrayNumeros);
    qtdImpares = impar(arrayNumeros);

    // Imprime na tela 
    console.log(`A quantidade informada foi ${arrayNumeros.length}, a de valores pares foi ${qtdPares}, e a de valores ímpares foi ${qtdImpares}`);
  }

//Chamada da função
listaNumeros([1, 2, 321, 10, 51, 11]);
