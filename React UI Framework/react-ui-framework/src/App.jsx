import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import PokemonPage from './components/PokemonPage';

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5");
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response.status}`)
      })
      .then((data) => {
        setPokedex(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setError(error.message);
        setPokedex(null);
      })
  }, [url]);

  function handleNextClick() {
    setUrl(nextUrl);
  }

  function handlePreviousClick() {
    setUrl(previousUrl);
  }

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
        <>
          <Container fluid className="d-flex justify-content-center">
            {previousUrl ? <Button variant="secondary" className="me-2" onClick={handlePreviousClick}>Previous</Button> : <Button variant="secondary" className="me-2" disabled>Previous</Button>}
            {nextUrl ? <Button variant="secondary" className="ms-2" onClick={handleNextClick}>Next</Button> : <Button variant="secondary" className="me-2" disabled>Next</Button>}
          </Container>
          <PokemonPage pokemons={pokedex} />
        </>
      )}
    </>
  )
}

export default App;
