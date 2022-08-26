export default function CampoSelecao({ nomeLabel, opcoes }) {
    return (
        <>
            <label> {nomeLabel} </label>
            <select>
                {opcoes.map((item, index) => (
                    <option key={index} value={item.chave}>
                        {item.valor}
                    </option>
                ))}
            </select>
        </>
    )
}