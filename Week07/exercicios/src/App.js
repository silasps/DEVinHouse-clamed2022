import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post'
import Titulo from './components/Ex 03 - Componentes/Titulo';
import BemVindo from './components/Ex 04 - Props/Props';
import Soma from './components/Ex 05 - Props/Soma';
import Botao from './components/Ex 06 - Props/Botao';

function App() {
const posts = [
  {
    id: 1,
    fotoPerfil:"https://cdn-icons-png.flaticon.com/512/848/848006.png",
    nomePerfil:"Silas Silva",
    dataPost:'12/10/2022',
    imagemPost:'https://assets.unileversolutions.com/recipes-v2/230411.jpg',
    descricaoPost:"Do tamanho da sua fome",
    curtidoPor:'Izabela Silva',
    qtdCurtidas:10
  },
  {
    id: 2,
    fotoPerfil:"https://cdn-icons-png.flaticon.com/512/848/848006.png",
    nomePerfil:"Silas Silva",
    dataPost:'12/10/2022',
    imagemPost:'https://assets.unileversolutions.com/recipes-v2/230411.jpg',
    descricaoPost:"Do tamanho da sua fome",
    curtidoPor:'Izabela Silva',
    qtdCurtidas:10
  }
]
  return (
    // Ex 05 - Props
    <Botao title='Eu sou um titulo estilizado com props.' background='blue' color='white'/>

    // Ex 05 - Props
    // <Soma num1={10} num2={25} />

    // Ex 04 - Props
    // <BemVindo nome='Silas Silva' idade={32} />

    // Ex 03 - Componetes
    // <Titulo titulo='Meu primeiro projeto React' texto='Criar um projeto React é muito fácil <3'/>

    // Exemplo de post dinamico
    // <>
    // {posts.map(post=>{
    //   return (
    //     <Post
    //     key={post.id}
    //     fotoPerfil={post.fotoPerfil}
    //     nomePerfil={post.nomePerfil}
    //     dataPost={post.dataPost}
    //     imagemPost={post.imagemPost}
    //     descricaoPost={post.descricaoPost}
    //     curtidoPor={post.curtidoPor}
    //     qtdCurtidas={post.qtdCurtidas}
    //     />)
    //   })}

    //   <Post />
    // </>
  );
}

export default App;
