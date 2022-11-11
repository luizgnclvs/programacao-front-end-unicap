import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

function PokemonRow(props) {
  let pokemons = props.pokemons;

  return (
    <Row xs={1} md={2} className="g-4">
      {pokemons.map((pokemon, index) => {
        console.log(pokemon)
        return (
        <Col key={index}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      )})}
    </Row>
  );
}

export default PokemonRow;