import usePokemonStore from "../stores/usePokemonStore";
import PokemonCard from "../components/PokemonCard";

export default function RandomPokemon() {
  const pokemons = usePokemonStore(state => state.pokemon);
  const fetch = usePokemonStore(state => state.fetch)

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