import '../../pages/CardsNfts/PageCards.css'

export default function CardsConstructor({
    nome,
    criador,
    nickcriador,
    foto_perfil,
    imagem_nft,
    categoria,
    preco,
    precoreal,
    moeda,
}) {
    return (
        <div className="Card">
            <div className="Textos">
                <img src={foto_perfil} className="imgCreator" />
                <div className="Texto">
                    <span className="Name">{nome}</span>
                    <span className="Nickname">{nickcriador}</span>
                </div>
            </div>

            <img src={imagem_nft} className="imagem" />
        </div>
    )
}