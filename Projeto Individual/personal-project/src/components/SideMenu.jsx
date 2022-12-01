import { Button, Sidebar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SideMenu() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [berrySearch, setBerrySearch] = useState("");
  const navigate = useNavigate();

  return (
    <Sidebar aria-label="Default sidebar example" className="overflow-auto mx-2 mt-3">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="flex gap-2">
            <fieldset>
              <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Pokédex #1" value={pokemonSearch} onChange={event => setPokemonSearch(event.target.value)}/>
            </fieldset>
            <Button onClick={() => navigate(`/pokemon/${pokemonSearch}`)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">`
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
          <Sidebar.Item href="/pokemon/1">
            Pokémon
          </Sidebar.Item>
          <div className="flex gap-2">
            <fieldset>
              <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Berry #1" value={berrySearch} onChange={event => setBerrySearch(event.target.value)}/>
            </fieldset>
            <Button onClick={() => navigate(`/berries/${berrySearch}`)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">`
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
          <Sidebar.Item href="/berries/1">
            Berries
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}