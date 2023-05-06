import { Card } from "flowbite-react";

const flavors = [
  {name: "spicy", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#f08030]"},
  {name: "dry", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#6890f0]"},
  {name: "sweet", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#f85888]"},
  {name: "bitter", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#78c850]"},
  {name: "sour", style: "w-1/3 text-center align-middle py-1 px-3 text-white font-bold rounded bg-[#78c850]"},
];

export default function BerryCard(props) {
  const berry = props.berry;

  let flavorText = berry.flavorText.replace("\\n", " ");
  flavorText = berry.flavorText.replace("é", "É");

  let berryFlavor = [];

  for (const slot of berry.flavors) {
    if (slot.potency > 0) {
      for (const flavor of flavors) {
        if (slot.flavor.name === flavor.name) {
          berryFlavor.push({name: flavor.name, style: flavor.style, potency: slot.potency});
        }
      }
    }
  }

  return (
    <div className="max-w-sm mx-2 mb-3 h-full min-h-full">
      <Card className="my-5" imgSrc={berry.sprite}>
        <h5 className="flex justify-center capitalize text-2xl text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300">
          {berry.name} berry
        </h5>
        <p className="text-center">{flavorText}</p>
        <div className="flex flex-col gap-3">
          <span className="text-center align-middle font-bold text-lg">Flavor</span>
          <div className="flex justify-evenly flex-wrap gap-2 capitalize">
            {berryFlavor.map((flavor, id) =>
              (<span key={id} className={flavor.style}>{flavor.name}: {flavor.potency}</span>)
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
          <span className="col-span-2 text-center align-middle font-bold text-lg">Info</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >Smoothness:</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >{berry.smoothness}</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300" >Firmness:</span>
          <span className="text-center align-middle py-1 px-3 text-white font-bold rounded bg-slate-300 capitalize" >{berry.firmness.name}</span>
        </div>
      </Card>
    </div>
  );
}