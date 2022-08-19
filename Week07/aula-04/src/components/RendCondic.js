export default function RenderizacaoCondicional({isLoading}) {
    
    if (isLoading) {
    return <p>Carregando...</p>
    }

    return (
        <>
            <h1>Aula 04</h1>
            <p>A aplicacao carregou!</p>
        </>
    )
}