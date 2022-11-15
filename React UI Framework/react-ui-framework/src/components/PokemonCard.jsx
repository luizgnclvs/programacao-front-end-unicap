import { Card, Container } from 'react-bootstrap';

function PokemonCard(props) {
  let pokemon = props.pokemon;

  return (
    <Card className="text-center vw-15 h-auto m-4" border="light" bg="light" variant="light">
      <Card.Header className="d-flex justify-content-between p-4">
        <Container className="d-flex align-items-center">
          <span className="pe-2 h3 m-0">{pokemon.name.toUpperCase()}</span> • 
          <small className="text-muted ps-2">{pokemon.originalName}</small>
        </Container>
        <Container className="h4">
          #{pokemon.id}
        </Container>
      </Card.Header>
      <Card.Img variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Text>{pokemon.flavorText}</Card.Text>
        {pokemon.types.length > 1 && (
          <Container className="m-3">
            <Card.Title>Types</Card.Title>
            <Container className="d-flex justify-content-evenly">
              <Card.Text>{pokemon.types[0].type.name.toUpperCase()}</Card.Text>
              <Card.Text>{pokemon.types[1].type.name.toUpperCase()}</Card.Text>
            </Container>
          </Container>
        )}
        {pokemon.types.length === 1 && (
          <Container className="m-3">
            <Card.Title>Type</Card.Title>
            <Card.Text>{pokemon.types[0].type.name.toUpperCase()}</Card.Text>
          </Container>
        )}
        <Container className="m-3">
          <Card.Title>Abilities</Card.Title>
          <Container className="d-flex justify-content-evenly">
            {pokemon.abilities.length > 0
              && pokemon.abilities.map((ability, id) => (
                <Card.Text key={id}>{ability.ability.name.toUpperCase()}</Card.Text>
              )
            )}
          </Container>
        </Container>
        <Container className="d-flex justify-content-evenly m-3">
          <Container>
            <Card.Title>Height</Card.Title>
            <Card.Text>{pokemon.height / 10}m</Card.Text>
          </Container>
          <Container>
            <Card.Title>Weight</Card.Title>
            <Card.Text>{pokemon.weight / 10}kg</Card.Text>
          </Container>
        </Container>
        <Container className="m-3">
          <Card.Title>Base Experience</Card.Title>
          <Card.Text>{pokemon.baseExperience}</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;