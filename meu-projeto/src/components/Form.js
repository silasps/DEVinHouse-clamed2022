import { useState } from 'react'

export default function Form() {

    const [ nome, setNome] = useState()

    const [ senha, setSenha] = useState()

    function cadastrarNome(e) {
        e.preventDefault()
        console.log(`Nome ${nome} e senha ${senha} cadastrados com sucesso!`);
    }

    console.log(nome)
    console.log(senha)

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarNome}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" id="name" name='name' placeholder="Digite seu nome" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} type="text" id="password" name='password' placeholder="Digite sua senha" />
                </div>
                <div>
                    <input type='submit' value='Cadastrar' />
                </div>
            </form>
        </div>
    )
}