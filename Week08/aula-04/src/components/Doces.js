export default function Doces({ listaDeDoces = [] }){
    return (
        <>
            <h2>Mamãe comprou doces?</h2>
            {listaDeDoces.length >= 1 ? (
                <p>Sim, ainda temos {listaDeDoces.length} doces em casa!</p>
            ) : (
                <>
                    <p>Acabaram os doces!</p>
                    <p>Urgente: pedir mais pra mamãe!</p>
                </>
            )}
        </>
    )
}