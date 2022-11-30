import useRandomPokemon from "../services/getRandomPokemon";
import PokemonCard from "../components/PokemonCard";

export default function RandomPokemon() {
  const pokemons = useRandomPokemon(state => state.pokemon);
  const fetch = useRandomPokemon(state => state.fetch)

  if (pokemons === undefined) {
    fetch();
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {pokemons && 
        pokemons.map((pokemon, id) => (
          <PokemonCard pokemon={pokemon} key={id} />
      ))}
    </div>
  );
}