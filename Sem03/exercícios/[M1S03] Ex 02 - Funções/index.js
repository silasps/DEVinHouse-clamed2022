function imprimeElementosEQtd (lista = []) {
    
    function imprimeElementos (listaElementos) {
        for (let i=0; i<listaElementos.length; i++) {
            console.log(listaElementos[i]);
        }
    }
    
    function imprimeQuantidade (listaQtd) {
        console.log(`Este array tem ${listaQtd.length} elementos.`)
    }
    
    imprimeElementos(lista);
    imprimeQuantidade(lista);
}

//Chamada da função
imprimeElementosEQtd(["Silas", "Izabela", "Helena", "Tobias", "José"]);