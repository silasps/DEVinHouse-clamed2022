// Seguir o conceito abaixo, a ação deve ocorrer da seguinte forma:

// Ao clicar no botão "Focar no input", o foco do HTML deve passar para o input de forma automática (simulando o clique no input).

import React, { useState, useEffect, useRef } from "react";

export default function FocoNoInput() {

const [name, setName] = useState('');

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div style={{ 'padding': '10px', 'textAlign': 'center' }}>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello! My name is {name}.</p>

            <button onClick={focusInput}>Foco no Input</button>
        </div>
    )
}