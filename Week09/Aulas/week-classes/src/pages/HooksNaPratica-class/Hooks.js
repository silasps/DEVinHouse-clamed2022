import React, { useState } from "react";

export default function App1(){
// variavel 'repositories' recebe o valor do retorno setRepositories
// funcao 'setRepositories' altera o valor da variavel
// metodo 'useState' define um valor inicial

const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1', fase: 1 },
    { id: 2, name: 'repo-2', fase: 2  },
    { id: 3, name: 'repo-3', fase: 3  },
]);

// const [] = 

    return (
        <ul>
            {repositories.map(repo => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    )
}