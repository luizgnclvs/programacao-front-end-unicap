import { useEffect, useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import PokemonModel from './models/PokemonModel'


function App() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then((data) => {
        for (const object of data.results) {
          fetch(object.url)
            .then(response => response.json())
            .then((data) => {
              fetch(data.species.url)
                .then(response => response.json())
                .then((newData) => {
                  const pokemon = new PokemonModel(
                    data.id,
                    data.name,
                    data.sprites.front_default,
                    data.height,
                    data.weight,
                    data.types,
                    newData.flavor_text_entries[0],
                    data.abilities,
                    newData.gender_rate,
                    newData.capture_rate,
                    newData.base_experience
                  );

                  setPokedex(a => [...a, pokemon]);
                })
            })
        }

        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPokedex(null);
      })
  }, [])

  return (
    <>
      <Header fixed="top" className="m-2"/>
      <Container className="">
        <Row className="justify-content-md-center">
          <Col>
            {loading && <div>Um momento, por favor...</div>}
            {error && (
              <div>{`Ocorrou um erro ao executar o fetch dos dados - ${error}`}</div>
            )}
            <ul>
              {pokedex &&
                pokedex.map((pokemon, id) => (<li key={id}><span>{pokemon.name}</span></li>))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
