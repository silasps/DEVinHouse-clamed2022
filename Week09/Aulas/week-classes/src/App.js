import logo from './logo.svg';
import './App.css';
import Componente from './pages/Ex.CompPerfil/ListaDeContatos';
import { useEffect, useState } from 'react';

function App() {
  const [pesquisa, setPesquisa] = useState('')

  const [lista, setLista] = useState([])

  useEffect(()=>{

    fetch(`https://api.github.com/search/users?q=${pesquisa}`)
        .then(response => response.json())
        .then(users => {
          console.log('- recebeu a resposta -')
          console.log(users)
          setLista(users.items)
        })

  }, [pesquisa])

  return (
    <>

      {/* {cards.map(card =>{
        return (
          <Componente 
            key={card.id}
            nome={card.nome}
            nickcriador={card.nickcriador}
            foto_perfil={card.foto_perfil}
            imagem_nft={card.imagem_nft}
          />
        )
      })} */}

      <Componente 
      // {lista.map(user => {
      //   photo="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      //   name = 'Silas 123'
      //   link = 'https://api.github.com/users/silasps'
      // })}
      />

      {/* <input  placeholder='Pesquisa' onChange={(e) => setPesquisa(e.target.value)}></input> */}
    </>
  );
}

export default App;

{/* <div>
                    <h4>{software.nome}</h4>
                    <progress value={software.downloaded}>{software.downloaded}</progress>
                    <button onClick={iniciarDownload}>Download</button>
                </div> */}