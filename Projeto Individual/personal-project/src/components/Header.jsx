import { useNavigate } from "react-router-dom";
import useRandomPokemon from "../services/getRandomPokemon";
import { Button, Navbar } from "flowbite-react";

export default function Header() {
  const navigate = useNavigate();
  const fetch = useRandomPokemon(state => state.fetch)

  function handleClick() {
    navigate("/");
    fetch();
  }

  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand
        href="/"
      >
        <img
          src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
          className="mr-3 h-6 sm:h-9"
          alt="Pokéball Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokédex
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={handleClick}>
          Randomize!
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}