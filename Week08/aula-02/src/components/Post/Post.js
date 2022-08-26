import './Post.css'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post({
  fotoPerfil,
  nomePerfil,
  dataPost,
  imagemPost,
  descricaoPost,
  curtidoPor,
  qtdCurtidas,
}){
  return (
    <div className="Post">

      <PostHeader fotoPerfil={fotoPerfil} nomePerfil={nomePerfil} dataPost={dataPost} />

      <p>{descricaoPost}</p>
      <img src={imagemPost} alt="foto do post" className="FotoDoPost" />

      <PostFooter curtidoPor={curtidoPor} qtdCurtidas={qtdCurtidas} />
    </div>
  )
}