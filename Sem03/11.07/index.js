// Questao 1

// var informarParImpar = function (num1){
//     var resultado;
//     if(num1 % 2 == 0){
//         resultado = 'Par'
//     } else if(num1 %2 == 1){
//         resultado = 'Ímpar'
//     } else{ resultado = "inválido"}

//     return resultado
// }

// console.log(informarParImpar());


// Questão 2 

// function imprimeElementosDaLista (lista = []){
    
//     for (let item of lista){
//          console.log (item);
//     }
//     let quantidade = "A quantidade de elementos da lista são " + lista.length;
//     return quantidade

// }

// console.log (imprimeElementosDaLista(["oi", "turu", "bom"]));

function imprimeElementosDaListaERetornaQtdDeItens (lista = []){
    
    function imprimeElementosDaLista (lista){
        
        for (let item of lista){
             console.log(item);
        }
    }

    function retornarQtdDeElementosDaLista (lista){
        console.log("Este array tem " + lista.length + " ítens.");
    }

    imprimeElementosDaLista(lista);
    retornarQtdDeElementosDaLista(lista);

}

imprimeElementosDaListaERetornaQtdDeItens(["oi", "turu", "bom"])

