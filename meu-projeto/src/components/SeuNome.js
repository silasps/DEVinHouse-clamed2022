export default function SeuNome({ setNome,nome }){

    return (
        <div>
            <p> Digite o seu nome: {nome} </p>
            <input type='text' placeholder='Qual e o seu nome?' onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}