import { useLoaderData } from "react-router-dom";
import BerryCard from "../components/BerryCard";

export async function loader({ params }) {
  let id = parseInt(params.berryId);

  const response1 = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);
  const result1 = await response1.json();

  const otherResponse1 = await fetch(result1.item.url);
  const otherResult1 = await otherResponse1.json();

  const response2 = await fetch(`https://pokeapi.co/api/v2/berry/${id + 1}`);
  const result2 = await response2.json();

  const otherResponse2 = await fetch(result2.item.url);
  const otherResult2 = await otherResponse2.json();

  const response3 = await fetch(`https://pokeapi.co/api/v2/berry/${id + 2}`);
  const result3 = await response3.json();

  const otherResponse3 = await fetch(result3.item.url);
  const otherResult3 = await otherResponse3.json();

  let results = [
    {
      name: result1.name,
      sprite: otherResult1.sprites.default,
      flavorText: otherResult1.flavor_text_entries[0].text,
      flavors: result1.flavors,
      smoothness: result1.smoothness,
      firmness: result1.firmness,
    },
    {
      name: result2.name,
      sprite: otherResult2.sprites.default,
      flavorText: otherResult2.flavor_text_entries[0].text,
      flavors: result2.flavors,
      smoothness: result2.smoothness,
      firmness: result2.firmness,
    },
    {
      name: result3.name,
      sprite: otherResult3.sprites.default,
      flavorText: otherResult3.flavor_text_entries[0].text,
      flavors: result3.flavors,
      smoothness: result3.smoothness,
      firmness: result3.firmness,
    }
  ];

  return results;
}

export default function BerryPage() {
  const berries = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {berries &&
        berries.map((berry, id) => (
          <BerryCard berry={berry}  key={id} />
      ))}
    </div>
  );
}