import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Cards from './pages/CardsNfts/PageCards';
// import StarWars from './pages/starWars';
// import Cronometro from './pages/Cronometro/Cronometro';
// import Case2Ref from './pages/case2Ref';
import HooksNaPratica from './pages/HooksNaPratica-class/HooksNaPratica';
// import Home from './pages/homeClassBased';
// import ImprimeFrutas from './exercicios/Ex 01 - Hooks/Hooks';
// import MudancaInput from './exercicios/Ex 02 - useEffect/UseEffect';
// import CountClicks from './exercicios/Ex 03 - CountClicks/CountClicks';
// import ClickModifica from './exercicios/Ex 04 - ClickModifica/ClickModifica';
// import FocoNoInput from './exercicios/Ex 05 - useRef/FocoNoInput';
import TelaMsg from './exercicios/Ex 06 - TelaMsg/TelaMsg';
import BarraProgresso from './exercicios/Ex 07 - Barra progresso/BarraProgresso'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cards /> */}
    {/* <StarWars /> */}
    {/* <Cronometro /> */}
    {/* <Case2Ref /> */}
    {/* <HooksNaPratica /> */}
    {/* <Home /> */}
    {/* <ImprimeFrutas /> */}
    {/* <MudancaInput /> */}
    {/* <CountClicks /> */}
    {/* <ClickModifica /> */}
    {/* <FocoNoInput /> */}
    {/* <TelaMsg /> */}
    <BarraProgresso />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
