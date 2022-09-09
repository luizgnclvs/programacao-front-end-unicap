import { useState } from 'react'
import { RegexCounter } from './components/RegexCounter'
import './App.css'

function App() {
  const vowelsRegex = /[aáàãâeéêiíoóõôuú]/gi;
  const consonantsRegex = /[bcçdfghjklmnpqrstvwxyz]/gi;
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Jogo da Senha</h1>
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
