import create from "zustand";

let searches = (set) => ({
    searches: undefined,
    url: "https://pokeapi.co/api/v2/pokemon/",
    fetch: async (url) => {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        set(state => ({
            searches: [...state.searches, result.results]
        }));
        set({ url: result.next })
        
    }
});

const useSearches = create(searches);

export default useSearches;