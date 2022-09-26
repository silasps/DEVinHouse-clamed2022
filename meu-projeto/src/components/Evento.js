import Button from "./evento/Button";

export default function Evento(){
    
    function meuEvento(){
        console.log(`Primeiro evento ativado`)
    }

    function segundoEvento(){
        console.log(`Segundo evento ativado`);
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text='Primeiro evento'/>
            <Button event={segundoEvento} text='Segundo evento'/>
        </div>
    )
}