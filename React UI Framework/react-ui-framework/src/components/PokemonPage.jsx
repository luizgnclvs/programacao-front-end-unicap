import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import PokemonModel from '../models/PokemonModel';
import PokemonCard from './PokemonCard';

function PokemonPage(props) {
  const [pokemonEntries, setPokemonEntries] = useState([]);
  const [isLoading, setIsLoaded] = useState(true);
  let pokemonList = props.pokemons;

  useEffect(() => {
    let entries = [];

    for (const object of pokemonList) {
      fetch(object.url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response.status}`);
          }

          return response.json();
        })
        .then((pokemonData) => {
          fetch(pokemonData.species.url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Ocorreu um erro HTTP. O status da resposta é ${response.status}`);
              }

              return response.json();
            })
            .then((speciesData) => {
              const flavorTextObject = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
              const originalNameObject = speciesData.names.find(entry => entry.language.name === "ja-Hrkt");

              let flavorText = flavorTextObject.flavor_text;
              let originalName = originalNameObject.name;

              flavorText = flavorText.replace(/\n/g, "\n");
              flavorText = flavorText.replace(/\f/g, "\n");

              const pokemon = new PokemonModel(
                pokemonData.id,
                pokemonData.name,
                pokemonData.sprites.front_default,
                pokemonData.height,
                pokemonData.weight,
                pokemonData.types,
                originalName,
                flavorText,
                pokemonData.abilities,
                pokemonData.base_experience
              );

              let element = entries.find(entry => entry.id === pokemon.id);

              if (element === undefined && entries.length < 20) {
                entries.push(pokemon);

                entries.sort((a, b) => {
                  return a.id - b.id;
                });
              }

              setPokemonEntries(entries)
            })
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoaded(false);
        });
    }
  }, [pokemonList]);

  return (
    <CardGroup className="p-3 m-3 d-flex flex-column flex-wrap align-items-center">
      {!isLoading &&
        pokemonEntries.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </CardGroup>
  );
}

export default PokemonPage;