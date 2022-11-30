import { useLoaderData } from "react-router-dom";
import BerryCard from "../components/BerryCard";

export async function loader({ params }) {
  let id = parseInt(params.berryId);

  const response1 = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);
  const result1 = await response1.json();

  const subResponse1 = await fetch(result1.item.url);
  const subResult1 = await subResponse1.json();

  const response2 = await fetch(`https://pokeapi.co/api/v2/berry/${id + 1}`);
  const result2 = await response2.json();

  const subResponse2 = await fetch(result2.item.url);
  const subResult2 = await subResponse2.json();

  const response3 = await fetch(`https://pokeapi.co/api/v2/berry/${id + 2}`);
  const result3 = await response3.json();

  const subResponse3 = await fetch(result3.item.url);
  const subResult3 = await subResponse3.json();

  let results = [
    {
      name: result1.name,
      sprite: subResult1.sprites.default,
      flavorText: subResult1.flavor_text_entries[0].text,
      flavors: result1.flavors,
      smoothness: result1.smoothness,
      firmness: result1.firmness,
    },
    {
      name: result2.name,
      sprite: subResult2.sprites.default,
      flavorText: subResult2.flavor_text_entries[0].text,
      flavors: result2.flavors,
      smoothness: result2.smoothness,
      firmness: result2.firmness,
    },
    {
      name: result3.name,
      sprite: subResult3.sprites.default,
      flavorText: subResult3.flavor_text_entries[0].text,
      flavors: result3.flavors,
      smoothness: result3.smoothness,
      firmness: result3.firmness,
    }
  ];

  return results;
}

export default function BerryPage() {
  const berries = useLoaderData();
  console.log(berries)

  return (
    <div className="grid grid-cols-3 gap-2">
      {berries && 
        berries.map((berry, id) => (
          <BerryCard berry={berry} key={id} />
      ))}
    </div>
  );
}