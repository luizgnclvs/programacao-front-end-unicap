import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PokemonModel from '../models/PokemonModel';
import PokemonRow from './PokemonRow';

async function PokemonPage(props) {
  async function fetchPokemon (object) {
    let response1 = await fetch(object.url);

    if (!response1.ok) {
      throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response1.status}`);
    }

    let data1 = await response1.json();

    let response2 = await fetch(data1.species.url);

    if (!response2.ok) {
      throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response2.status}`);
    }

    let data2 = await response2.json();

    const id = data1.id;
    const name = data1.name;
    const img = data1.sprites.front_default;
    const height = data1.height;
    const weight = data1.weight;
    const types = data1.types;
    const originalName = data2.names[0].name;
    const flavorText = data2.flavor_text_entries[0].flavor_text;
    const abilities = data1.abilities;
    const baseExperience = data1.base_experience;

    const pokemon = new PokemonModel(id, name, img, height, weight, types, originalName, flavorText, abilities, baseExperience);
    return pokemon;
  }

  function sliceIntoChunks(array, chunkSize) {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
          const chunk = array.slice(i, i + chunkSize);
          chunks.push(chunk);
      }
      return chunks;
  }

  let list = props.pokemons;
  let pokemons = [];

  for (const object of list) {
    let pokemon = await fetchPokemon(object);
    pokemons.push(pokemon)
  }

  let rows = sliceIntoChunks(pokemons, 4);
  console.log(rows);

  return (
    <Container className="p-3 m-3">
      {rows.map((row, index) => (
        <PokemonRow key={index} pokemons={row}></PokemonRow>
      ))}
    </Container>
  );
}

export default PokemonPage;