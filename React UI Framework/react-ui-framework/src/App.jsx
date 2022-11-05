import { useEffect, useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Este é um erro HTTP: O status é ${response.status}`
          );
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
        setPokemons(data.results);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <>
      <Header fixed="top" className="m-2"/>
      <Container className="">
        <Row className="justify-content-md-center">
          <Col>
            <h1>Pokémons</h1>
            {loading && <div>Um momento, por favor...</div>}
            {error && (
              <div>{`Ocorrou um erro ao executar o fetch dos dados - ${error}`}</div>
            )}
            <ul>
              {data &&
                pokemons.map(({ id, name }) => (<li key={id}><span>{name}</span></li>))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
