import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function removerEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Digite o seu e-mail..."
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
      </form>
      {userEmail && (
        <div>
          <p>O e-mail inserido foi: {userEmail}</p>
          <button onClick={removerEmail}>Remover e-mail</button>
        </div>
      )}
    </div>
  );
}
