import { useState } from 'react'

export default function OutraLista({ itens }) {

    // const [item, setItem] = useState()

    // function adicionarItem(){
    //     return itens.push(item)
    // }
    // console.log(itens);

    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Nao tem nada de bom</p>
            )
            }
            {/* <input value={item} onChange={(e) => setItem(e.target.value)} placeholder="Digite um valor"/>
            <button onClick={adicionarItem}>Adicionar item</button> */}
        </>
    )
}