import create from "zustand";

let randomPokemon = (set) => ({
    pokemon: undefined,
    fetch: async () => {
        let id = Math.floor(Math.random() * 902) + 1;

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=3&offset=${id}`
        );
        const result = await response.json();
        const results = result.results;

        let pokemons = [];

        for (const item of results) {
            const response = await fetch(item.url);
            const result = await response.json();

            pokemons.push(result);
        }

        set({ pokemon: pokemons });
    },
});

const useRandomPokemon = create(randomPokemon);

export default useRandomPokemon;