import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import useSearches from "../services/getSearchers";

export default function SideMenu() {
  // const searches = useSearches(state => state.searches);
  // const fetch = useSearches(state => state.fetch);

  // fetch()

  // console.log(searches)

  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      setNext(result.next);
      setPrevious(result.previous);
    }

    getData();
  }, [])

  console.log(data)

  return (
    <div className="w-fit">
      <Sidebar aria-label="Default sidebar example" className="overflow-auto max-h-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {data.length &&
              data.map((item, id) => (
                <Sidebar.Item key={id} href="#" className="capitalize">
                  {item.name}
                </Sidebar.Item>
              ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>  
  );
}