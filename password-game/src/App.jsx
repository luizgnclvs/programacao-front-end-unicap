import { useState } from 'react'
import { InputGrid } from './components/InputGrid';
import { clearInputs } from './components/InputGrid';
import { autoFocus } from './components/InputGrid';
import { formatTable } from './components/formatTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
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

      if (results.word.match(/-/)) {
        fetchRandomWord();
      }

      setData(results);
      setError(null);

      setTries([]);

      setTimeout(clearInputs, 1);
      setTimeout(autoFocus, 1);
    } catch(err) {
      setError(err.message);
      setData(null);
    }
  };

  const [tries, setTries] = useState([]);

  const tryGuess = () => {
    let letterInputs = document.querySelectorAll(".input-letter");
    let currentTry = [];

    let emptyInput = false;

    for (let input of letterInputs) {
      if (input.value === "") {
        emptyInput = true;
        break;
      }
    }

    if (emptyInput) {
      alert("Preencha todas as letras antes de fazer uma tentativa.");
    } else {
      for (let input of letterInputs) {
        currentTry.push(input.value);
      }

      setTries([...tries, currentTry]);

      setTimeout(formatTable, 1);
      setTimeout(checkWin, 100);
    }
  };

  const checkWin = () => {
    let rows = document.querySelectorAll(".row");
    let cells = rows[rows.length - 1].children;

    let allCorrect = true;

    for (let cell of cells) {
      if (!cell.classList.contains("bull")) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      clearInputs();
      alert("Parabéns! Você descobriu a palavra!");
    }
  };

  return (
    <div className="App">
      <h1>Jogo da Senha</h1>
      {error && <div>{`Ocorreu um erro ao executar o fetch dos dados - ${error}`}</div>}
      <button onClick={fetchRandomWord}>Nova Palavra</button>
      {data && (
        <div className="input-area">
          <InputGrid letters={data.word.split("")} />
          <button onClick={tryGuess} className="input-button">
            <FontAwesomeIcon icon={faCheck} />
          </button>
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
          <button className="help-button" onClick={() => {
            alert(
              "Você deve descobrir qual a palavra secreta na base da tentativa e erro.\n\nCélulas verdes significam que a letra correta está na posição correta.\nAs vermelhas significam que, apesar da palavra possuir tal letra, ela não se encontra na posição correta.\nPor fim, as células cinzas significam que esta letra não está na palavra secreta."
            )
          }}>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App
