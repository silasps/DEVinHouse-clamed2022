import './App.css';
import Post from './components/Post/Post'

function App() {
  return (
    <>
      <Post
        fotoPerfil="https://cdn-icons-png.flaticon.com/512/848/848006.png"
        nomePerfil="Silas Silva"
        dataPost='12/10/2022'
        imagemPost='https://assets.unileversolutions.com/recipes-v2/230411.jpg'
        descricaoPost="Do tamanho da sua fome"
        curtidoPor='Izabela Silva'
        qtdCurtidas='10'
      />

      <Post
        fotoPerfil="https://cdn-icons-png.flaticon.com/512/848/848006.png"
        nomePerfil="Silas Silva"
        dataPost='14/05/2022'
        imagemPost='https://sm.ign.com/t/ign_br/screenshot/default/os-cavaleiros-do-zodiaco-na-tv_ejjr.1280.jpg'
        descricaoPost="Os Cavaleiros do Zodiaco"
        curtidoPor='Silas Silva'
        qtdCurtidas='1'
      />

      <Post
        fotoPerfil="https://cdn-icons-png.flaticon.com/512/848/848006.png"
        nomePerfil="Marco Henrique"
        dataPost='14/05/2022'
        descricaoPost="Aparelhos para voce montar sua propria academia"
        imagemPost='https://5.imimg.com/data5/SX/BI/MY-428349/53c34227e58a44dd0840f40838b7c399-500x500.jpg'
        curtidoPor=''
        qtdCurtidas='0'
      />
    </>
  );
}

export default App;
