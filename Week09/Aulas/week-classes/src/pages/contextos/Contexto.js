import { createContext, useState  } from "react";

const UsuarioContext = createContext()

// Criar um provider
const UsuarioProvider = ({ children }) => {

    const [tipoDePlano, setTipoDePlano] = useState('premium')

    return (
        <UsuarioContext.Provider value={{
            nome: 'Silas',
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }