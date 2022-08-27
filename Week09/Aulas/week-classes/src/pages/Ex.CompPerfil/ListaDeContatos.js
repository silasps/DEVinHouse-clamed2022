// Crie um componente de lista de contatos. Cada contato deve conter uma props photo, name e description.
// Defina valores padrão para as props que o componente deve receber (dedaultProps)

import './ListaDeContatos.css'

export default function Componente({ photo, name, link }) {
    return (
        <div className="DadosContato1">
            <div className="Titulo">
                <h1>Usuário Github</h1>
            </div>
            <div className='DadosContato'>
                <div className='Photo'>
                    <img className='imgFile' src={photo}></img>
                </div>
                <div className='Info'>
                    <p className='p1'><strong>{name}</strong></p>
                    <p className='p2'>{link}</p>
                </div>
            </div>
        </div>
    )
}

