import { createSignal, Show, type Component } from "solid-js";

interface Props {
    id: number;
    name: string;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
    const [isVisible, setIsVisible] = createSignal(true);

    const deleteFavorite = () => {
        const pokemons = localStorage.getItem("favorites") || "[]";
        const parsedPokemons = JSON.parse(pokemons);
        const filteredPokemons = parsedPokemons.filter((pokemon: { id: number }) => pokemon.id !== props.id);
        localStorage.setItem("favorites", JSON.stringify(filteredPokemons));
        setIsVisible(false);
    };
    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center p-4">
                <a href={`/pokemons/${props.name}`}>
                    <img
                        width={96}
                        height={96}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
                        alt={props.name}
                        style={`view-transition-name: ${props.name}-image`}
                    />
                    <p class="capitalize">
                        #{props.id} - {props.name}
                    </p>
                </a>
                <button class="text-red-400" onClick={() => deleteFavorite()}>
                    Borrar
                </button>
            </div>
        </Show>
    );
};
