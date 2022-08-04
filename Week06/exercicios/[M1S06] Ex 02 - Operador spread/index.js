// Utilizando o spread com a função de espalhar dados de um array, adicione todo o array2 dentro do array1 porém a sua saída deverá ser [12, 43, 6, 2, 8, 5, 3, "1", "2", "3", "4"].

let array1 = [12,43,6,2,8,5,3];
let array2 = ["1", "2", "3", "4"];

function juntarArrays(...arrays) {
    var arrayConcatenado = [].concat(...arrays)
    return arrayConcatenado;
}

console.log(juntarArrays(array1, array2));