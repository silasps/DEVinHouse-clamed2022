import React, { useState, useEffect, useRef } from "react";

export default function HooksNaPratica() {

    // ****** Incremento de valor usando UseState ******

    // const [count, setCount] = useState(0)

    // const incrementCount = () => {
    //     setCount((prevState) => prevState + 1)
    // }

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={incrementCount}>Increment</button>
    //     </div>
    //     );


    // ****** Incremento de valor e mudanca do objeto usando UseState ******

    // const [state, setState] = useState({count: 0, theme: 'light'})

    // const incrementCount = () => {
    //     setState((prevState) => {
    //         if(prevState.theme === 'light') {
    //             return {
    //                 ...prevState,
    //                 count: prevState.count + 1,
    //                 theme: 'dark',
    //             };
    //         } else {
    //             return {
    //                 ...prevState,
    //                 count: prevState.count + 1,
    //                 theme: 'light',
    //             };
    //         }
    //     });
    //     console.log(state);
    // };

    // return (
    //     <div>
    //         <h1>{state.theme}</h1>
    //         <button onClick={incrementCount}>Increment</button>
    //     </div>
    //     );


    // ********* Usando useState e useEffect com chamada de API ***********

    // const [item, setItem] = useState([])

    // const [resourceType, setResourceType] = useState('Posts');

    // useEffect(() => {
    //     const fetchResponseTypes = async () => {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         const responseJson = await response.json();

    //         setItem(responseJson);
    //         console.log(responseJson);
    //     }

    //     fetchResponseTypes();

    // }, [resourceType])

    // const changeResourceType = (resourceType) => {
    //     setResourceType(resourceType);
    // }

    // return (
    //     <div>
    //         <h1>{resourceType}</h1>
    //         <div style={{ display: 'flex', alighItems: 'center' }}>
    //             <button onClick={() => changeResourceType('Posts')}>Posts</button>
    //             <button onClick={() => changeResourceType('Comments')}>Comments</button>
    //             <button onClick={() => changeResourceType("Todos")}>ToDos</button>
    //         </div>

    //         {item.map(item => <p>{item.id}</p>)}
    //     </div>
    //     );


    // ********* Utilizando useRef para contar a qtd de vezes que um componente e renderizado ***********

    // const [name, setName] = useState('');

    // const renders = useRef(0);

    // useEffect(() => {
    //     renders.current = renders.current + 1;
    // })

    // return (
    //     <div style={{ 'padding': '10px', 'textAlign': 'center' }}>
    //         <input value={name} onChange={(e) => setName(e.target.value)}></input>
    //         <p>Hello! My name is {name}.</p>
    //         <p>Renders: {renders.current}</p>
    //     </div>
    // )


    // ********* Utilizando useRef para contar a qtd de vezes que um componente e renderizado ***********

    const [name, setName] = useState('');

    const inputRef = useRef();

    console.log(inputRef.current)

    return (
        <div style={{ 'padding': '10px', 'textAlign': 'center' }}>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Hello! My name is {name}.</p>
        </div>
    )
}