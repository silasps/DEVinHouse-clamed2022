import { useRef, useState } from "react";

export default function Cronometro() {

    const [timer, setTimer]= useState(0)

    const iniciaContagem = useRef();

    function iniciarContagem() {
        // const myInterval = setInterval(timer, 1000);
    }

    function pararContagem() {
        // clearInterval(myInterval);
    }

    return (
        <div style={{'display': 'block', 'width': '240px','margin': '0 auto', 'textAlign': 'center', 'transform': 'scale(2) translateY(50%)'}}>
            <h2>{timer}</h2>
            <button onClick={iniciarContagem}>Iniciar</button>
            <button onClick={pararContagem}>Parar</button>
        </div>
    );
}