// Aula 04 - Slide 07
export default function Carros({ carros = [] }) {
    return (
        <>
            <h2>Temos carros na fabrica?</h2>
            {carros.length >=1 ? (
                <p>Sim, temos {carros.length} carros na fabrica hoje.</p>
            ) : (
                <p>Nao temos carros na fabrica hoje.</p>
            )}
            
            {carros.map((item, index) => (
                <p key={index}>
                    {item}
                </p>
            ))}
        </>
    )
}