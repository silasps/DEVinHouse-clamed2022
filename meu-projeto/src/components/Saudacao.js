export default function Saudacao({ nome }) {

  function imprimirSaudacao(algumNome) {
    return (
        `Ola, ${algumNome}, tudo bem?`
    )
  }

  return (
    <>
      {nome && <p>{imprimirSaudacao(nome)}</p>}
    </>
  );
}
