import React, { useEffect, useState } from "react";

export default function TelaMsg() {

    const mensagens = [
        {
            id: 1,
            photo: 'https://cdn-icons-png.flaticon.com/512/2977/2977402.png', 
            nome: 'Little Turtle',
            ultimaMsg: "Hi! I'm a turtle.",
        },
        {
            id: 2,
            photo: 'https://cdn-icons-png.flaticon.com/512/3069/3069172.png', 
            nome: 'Scared Bear',
            ultimaMsg: "Hello! I'm a scared bear.",
        },
        {
            id: 3,
            photo: 'https://cdn-icons-png.flaticon.com/512/809/809052.png', 
            nome: 'Bee Star',
            ultimaMsg: "I'm a Hollywood star. I was in Bee movie.",
        }
    ]

    const [messages, setMessages] = useState(mensagens);

    // States do form
    const [nome, setNome] = ('')


    function updateMessages() {
        setMessages(prevState => {
            return {
                ...prevState,
                ...{ 
                    id: 1,
                    photo: 'https://cdn-icons-png.flaticon.com/512/2977/2977402.png', 
                    nome: {nome},
                    ultimaMsg: "Hi! I'm a turtle.", 
                }
            }
        }
        )
        console.log(messages)
    }

    useEffect(() => {
        
    }, [messages])

    return (
        <div style={{ 'backgroundColor': 'black' }}>
            <div style={{ 'textAlign': 'end' }}>
                <p style={{ 'color': 'white', 'marginRight': '20px' }}>Nova Conversa</p> <br /> <br />
            </div>
            <form>
                <input type="text" name="nome" value={nome} onSubmit={(e) => setNome(e.target.value)}></input>
                <button type="submit" onSubmit={updateMessages}>New message</button>
            </form>
            {messages.map(mensagem => {
                return (
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <div>
                        <img style={{ 'border': 'solid white 1px', 'borderRadius': '50px', 'width': '50px', 'height': '50px', 'padding': '10px' }} src={mensagem.photo}></img>
                    </div>
                    <div style={{ 'paddingLeft': '20px' }}>
                        <h1 style={{ 'color': 'white' }}>{mensagem.nome}</h1>
                        <p style={{ 'color': 'white' }}>{mensagem.ultimaMsg}</p>
                    </div>
                </div>
                )
            })}
        </div>   
    )

}


// Pegando elementos e enviando para o Local Storage
// import React, { Component, useState, useEffect } from 'react';
// export default function Greeting() {

//   const [firstName, setFirstName] = useState(() =>
//     window.localStorage.getItem('hooksFirstName') || ''
//   );
//   const [lastName, setLastName] = useState(() =>
//     window.localStorage.getItem('hooksLastName') || ''
//   );
//   const handleFirstNameChange = (e) => setFirstName(e.target.value);
//   const handleLastNameChange = (e) => setLastName(e.target.value);

//   useEffect(() => {
//     window.localStorage.setItem('hooksFirstName', firstName);
//     window.localStorage.setItem('hooksLastName', lastName);
//   });

//   return (
//     <div>
//       <input value={firstName} onChange={handleFirstNameChange} /><br />
//       <input value={lastName} onChange={handleLastNameChange} />
//       <p>
//         Hello, <span>{firstName} {lastName}</span>
//       </p>
//     </div>
//   );
// }
