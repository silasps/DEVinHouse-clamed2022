import './App.css';
import Titulo from './components/Titulo';
import Titulo2 from './components/titulo2';

function App() {
  const estilo = { 
    backgroundColor: 'blue',
    color: 'white',
  }

  return (
    <div className="container">
      <Titulo />
      <Titulo2 />
      <p style={{ backgroundColor: 'red' }}>Sou um parágrafo 1</p>
      <p style={estilo}>Sou um parágrafo 2</p>
    </div>
  );
}

export default App;
