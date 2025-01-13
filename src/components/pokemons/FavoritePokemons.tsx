import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const pokemons = localStorage.getItem("favorites") || "[]";
    return JSON.parse(pokemons);
    // return [{ id: 1, name: "Bulbasaur" }];
};

export const FavoritePokemons = () => {
    const [favoritePokemons, setFavoritePokemons] = createSignal<FavoritePokemon[]>(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            <For each={favoritePokemons()}>
                {(pokemon) => <FavoritePokemonCard id={pokemon.id} name={pokemon.name} />}
            </For>
        </div>
    );
};
