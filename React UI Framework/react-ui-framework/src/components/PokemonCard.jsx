import { Card, Container } from 'react-bootstrap';

function PokemonCard(props) {
  let pokemon = props.pokemon;

  return (
    <Card className="text-center">
      <Card.Header>{pokemon.name} • <small class="text-muted">{pokemon.originalName}</small>&nbsp;#{pokemon.id}</Card.Header>
      <Card.Img variant="top" src={pokemon.img} />
      <Card.Body>
        <Card.Text>{pokemon.flavorText}</Card.Text>
        {pokemon.types.length > 1 && (
          <>
            <Card.Title>Types</Card.Title>
            <Card.Text>{pokemon.types[0].type.name}</Card.Text>
            <Card.Text>{pokemon.types[1].type.name}</Card.Text>
          </>
        )}
        {pokemon.types.length === 1 && (
          <>
            <Card.Title>Type</Card.Title>
            <Card.Text>{pokemon.types[0].type.name}</Card.Text>
          </>
        )}
        <Card.Title>Abilities</Card.Title>
        {pokemon.abilities.length > 0
          && pokemon.abilities.map((ability, id) => (
            <Card.Text key={id}>{ability.ability.name}</Card.Text>
          )
        )}
        <Container>
          <Card.Title>Height</Card.Title>
          <Card.Text>{pokemon.height / 10}m</Card.Text>
        </Container>
        <Container>
          <Card.Title>Weight</Card.Title>
          <Card.Text>{pokemon.weight / 10}kg</Card.Text>
        </Container>
        <Container>
          <Card.Title>Height</Card.Title>
          <Card.Text>{pokemon.height / 10}m</Card.Text>
        </Container>
        <Container>
          <Card.Title>Height</Card.Title>
          <Card.Text>{pokemon.height / 10}m</Card.Text>
        </Container>
        <Container>
          <Card.Title>Base Experience</Card.Title>
          <Card.Text>{pokemon.baseExperience}</Card.Text>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;