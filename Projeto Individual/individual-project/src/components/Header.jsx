import { applyThemePreference } from "../utils/themeUtils";
import { Button, Navbar } from "flowbite-react";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import useRandomPokemon from "../stores/usePokemonStore";
import useThemeStore from "../stores/useThemeStore";


export default function Header() {
  const navigate = useNavigate();
  const fetch = useRandomPokemon(state => state.fetch)

  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  function handleClick() {
    navigate("/");
    fetch();
  }

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="mx-2 my-1"
    >
      <Navbar.Brand
        onClick={() => navigate("/")}
        className="cursor-pointer"
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
      <div className="flex md:order-2 gap-2">
        <Button onClick={toggleTheme}>
          Change Theme
        </Button>
        <Button onClick={handleClick}>
          Randomize!
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}