import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import PokemonPage from './components/PokemonPage';

function App() {
  const [pokedex, setPokedex] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response.status}`)
      })
      .then((data) => {
        setPokedex(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError(error.message);
        setPokedex(null);
      })
  }, []);

  return (
    <>
      <Header fixed="top" className="m-2"/>
      <Container className="position-absolute top-50 start-50 translate-middle">
        {isLoading && (
          <div className="display-5 text-center">Um momento, por favor...</div>
        )}
        {error && (
          <div className="display-5 text-center">Não foi possível executar o <code>fetch</code> dos dados - {`${error}`}</div>
        )}
      </Container>
      {pokedex && (
        <PokemonPage pokemons={pokedex} />
      )}
    </>
  )
}

export default App;
