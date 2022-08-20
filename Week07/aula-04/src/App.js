import logo from './logo.svg';
import './App.css';
import RenderizacaoCondicional from './components/RendCondic';
import Doces from './components/Doces';
import Carros from './components/Carros';
import CampoSelecao from './components/CampoSelecao';

function App() {
  const estados = [
    {
      chave: 'SC',
      valor: 'Santa Catarina'
    }, 
    {
      chave: 'PR',
      valor: 'Parana'
    }, 
    {
      chave: 'RS',
      valor: 'Rio Grande do Sul'
    }
  ]

  const carros = [
    {
      chave: 'Hatch',
      valor: 'Uno'
    }, 
    {
      chave: 'Sedan',
      valor: 'C4 Pallas'
    }, 
    {
      chave: 'Sedan',
      valor: 'Grand Siena'
    }, 
    {
      chave: 'Hatch',
      valor: 'Ka'
    }
  ]

  return (
    <div className="App">
      <RenderizacaoCondicional isLoading={false}/>
      <Doces listaDeDoces={['bananinha']}/>
      <Carros carros={['uno', 'C4 Pallas', 'Linea']}/> {/* Aula 04 - Slide 07 */}

      <CampoSelecao nomeLabel="Estados" opcoes={estados}/>

      <CampoSelecao nomeLabel="Carros" opcoes={carros}/>
    </div>
  );
}

export default App;
