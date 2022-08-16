import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Alexandre'
  return (
    <div className="App">      
      <HelloWorld />
      <SayMyName nome='Silas'/>
      <SayMyName nome='Izabela'/>
      <SayMyName nome={name}/>

      <Pessoa 
        nome='Silas'
        idade='32'
        profissao='Programador'
        foto='https://via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
