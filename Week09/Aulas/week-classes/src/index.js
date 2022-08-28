import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Cards from './pages/CardsNfts/PageCards';
// import StarWars from './pages/starWars';
// import Cronometro from './pages/Cronometro/Cronometro';
// import Case2Ref from './pages/case2Ref';
// import App1 from './pages/HooksNaPratica-class/Hooks';
// import Home from './pages/homeClassBased';
// import ImprimeFrutas from './exercicios/Ex 01 - Hooks/Hooks';
// import MudancaInput from './exercicios/Ex 02 - useEffect/UseEffect';
import CountClicks from './exercicios/Ex 03 - CountClicks/CountClicks';
import ClickModifica from './exercicios/Ex 04 - ClickModifica/ClickModifica';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cards /> */}
    {/* <StarWars /> */}
    {/* <Cronometro /> */}
    {/* <Case2Ref /> */}
    {/* <App1 /> */}
    {/* <Home /> */}
    {/* <ImprimeFrutas /> */}
    {/* <MudancaInput /> */}
    {/* <CountClicks /> */}
    <ClickModifica />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
