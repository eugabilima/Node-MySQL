import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/mensagem")
      .then((res) => {
        setMensagem(res.data.mensagem);
      })
      .catch((error) => {
        console.error("Erro ao buscar mensagem:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Integração React + Node.js</h1>
      <p><strong>Resposta do servidor:</strong> {mensagem || "Carregando..."}</p>
    </div>
  );
}

export default App;