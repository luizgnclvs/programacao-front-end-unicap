import { Card } from "flowbite-react";
import SpritesCarousel from "./SpritesCarousel";

const types = [
  {name: "normal", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#a8a878]"},
  {name: "fighting", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#c03028]"},
  {name: "flying", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#a890f0]"},
  {name: "poison", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#a040a0]"},
  {name: "ground", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#e0c068]"},
  {name: "rock", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#b8a038]"},
  {name: "bug", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#a8b820]"},
  {name: "ghost", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#705898]"},
  {name: "steel", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#b8b8d0]"},
  {name: "fire", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#f08030]"},
  {name: "water", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#6890f0]"},
  {name: "grass", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#78c850]"},
  {name: "electric", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#f8d030]"},
  {name: "psychic", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#f85888]"},
  {name: "ice", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#98d8d8]"},
  {name: "dragon", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#7038f8]"},
  {name: "dark", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#705848]"},
  {name: "fairy", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#ee99ac]"},
  {name: "???", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#68a090]"}
];

export default function PokemonCard(props) {
  const pokemon = props.pokemon;
  let name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

  let pokemonType = [];

  for (const slot of pokemon.types) {
    for (const type of types) {
      if (slot.type.name === type.name) {
        pokemonType.push(type);
      }
    }
  }

  let pokemonAbilities = [];

  for (const slot of pokemon.abilities) {
    let ability = slot.ability.name;
    ability = ability[0].toUpperCase() + ability.substring(1);

    pokemonAbilities.push(ability);
  }

  return (
    <div className="max-w-sm">
      <Card className="my-5">
        <SpritesCarousel sprites={pokemon.sprites} />
        <h5 className="flex justify-evenly text-2xl text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300">
          <span>{name}</span>
          <span># {pokemon.id}</span>
        </h5>
        <div className="flex flex-col gap-3">
          <span className="text-center align-middle font-bold text-lg">Type</span>
          <div className="flex justify-evenly capitalize">
            {pokemonType.map((type, id) =>
              (<span key={id} className={type.style}>{type.name}</span>)
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-center align-middle font-bold text-lg">Abilities</span>
          <div className="flex justify-evenly flex-wrap gap-2">
            {pokemonAbilities.map((ability, id) =>
              (<span key={id} className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >{ability}</span>)
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
          <span className="col-span-2 text-center align-middle font-bold text-lg">Info</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >Height</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >{pokemon.height / 10}m</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >Weight</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >{pokemon.weight / 10}kg</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >Base XP</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >{pokemon.base_experience}</span>
        </div>
      </Card>
    </div>
  );
}