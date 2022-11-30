import { Button, Sidebar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SideMenu() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
  return (
    <div className="max-h-screen">
      <Sidebar aria-label="Default sidebar example" className="overflow-auto">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="flex gap-2">
              <fieldset>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Pokédex Number" value={search} onChange={event => setSearch(event.target.value)}/>
              </fieldset>
              <Button onClick={() => navigate(`/pokemon/${search}`)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">`
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </div>
            <Sidebar.Item href="/pokemon/1">
              Pokémon
            </Sidebar.Item>
            <Sidebar.Item href="/berries/1">
              Berries
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}