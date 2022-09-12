import { useState } from 'react'
import { InputGrid } from './components/InputGrid';
import { autoFocus } from './components/InputGrid';
import { formatTable } from './components/formatTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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

      let results = await response.json();

      setData(results);
      setError(null);

      setTimeout(autoFocus, 1)
    } catch(err) {
      setError(err.message);
      setData(null);
    }
  };

  const [tries, setTries] = useState([]);

  const tryGuess = () => {
    let letterInputs = document.querySelectorAll(".guess");
    let currentTry = [];

    for (let input of letterInputs) {
      currentTry.push(input.value);
    }

    setTries([...tries, currentTry]);

    setTimeout(formatTable, 1);
  };


  return (
    <div className="App">
      <h1>Jogo da Senha</h1>
      {error && <div>{`Ocorreu um erro ao executar o fetch dos dados - ${error}`}</div>}
      <button onClick={fetchRandomWord}>Nova Palavra</button>
      {data && (
        <div>
          {data.word}
          <InputGrid letters={data.word.split("")} />
          <button onClick={tryGuess}><FontAwesomeIcon icon={faCheck} /></button>
        </div>
      )}
      {tries.length > 0 && (
        <div>
          <h3>Tentativas</h3>
          <table>
            <tbody>
              {tries.map((currentTry, index) => {
                return (
                  <tr key={index} className="row">
                    {currentTry.map((letter, index) => {
                      return (
                        <td key={index} className="cell">
                          {letter}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App
