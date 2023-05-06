import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import { loader as berryLoader } from "./routes/BerryPage";
import { loader as pokemonLoader } from "./routes/PokemonPage";
import PokemonPage from "./routes/PokemonPage";
import RandomPokemon from "./routes/RandomPokemon";
import Root from "./routes/Root";
import "./index.css";
import BerryPage from "./routes/BerryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <RandomPokemon />,
      },
      {
        path: "pokemon/:pokemonId",
        element: <PokemonPage />,
        loader: pokemonLoader,
      },
      {
        path: "berries/:berryId",
        element: <BerryPage />, 
        loader: berryLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);