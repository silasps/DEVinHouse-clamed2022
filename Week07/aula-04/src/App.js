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

  return (
    <div className="App">
      <RenderizacaoCondicional isLoading={false}/>
      <Doces listaDeDoces={['bananinha']}/>
      <Carros carros={['uno', 'C4 Pallas', 'Linea']}/> {/* Aula 04 - Slide 07 */}

      <CampoSelecao nomeLabel="Estados" opcoes={estados}/>
    </div>
  );
}

export default App;
