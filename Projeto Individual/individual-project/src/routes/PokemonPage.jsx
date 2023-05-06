import { useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export async function loader({ params }) {
  let id = parseInt(params.pokemonId);

  const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result1 = await response1.json();

  const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);
  const result2 = await response2.json();

  const response3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 2}`);
  const result3 = await response3.json();

  let results = [result1, result2, result3];
  return results;
}

export default function PokemonPage() {
  const pokemons = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {pokemons &&
        pokemons.map((pokemon, id) => (
          <PokemonCard pokemon={pokemon} key={id} />
      ))}
    </div>
  );
}