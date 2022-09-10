import { useState } from 'react'
import { RegexCounter } from './components/RegexCounter'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch(
        "https://api.dicionario-aberto.net/random"
      );

      if (!response.ok) {
        throw new Error(
          `Esse é um erro HTTP: O status é ${response.status}`
        );
      }

      let data = await response.json();

      setData(data);
      setError(null);

    } catch(err) {
      setError(err.message);
      setData(null);
    }
  };

  const vowelsRegex = /[aáàãâeéêiíoóõôuú]/gi;
  const consonantsRegex = /[bcçdfghjklmnpqrstvwxyz]/gi;
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Jogo da Senha</h1>
      {error && (
        <div>{`Ocorreu um erro ao executar o fetch dos dados - ${error}`}</div>
      )}
      <button onClick={fetchRandomWord}>oi</button>
      {data && <div>{data.word}</div>}
      <h3></h3>
      <input type="text" value={text} placeholder="Insira a palavra-chave" onChange={handleInputChange} />
      <RegexCounter
        title="Vogais" text={text} regex={vowelsRegex}
      />
      <RegexCounter
        title="Consoantes" text={text} regex={consonantsRegex}
      />
    </div>
  );
}

export default App
