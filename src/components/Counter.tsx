import { createSignal } from "solid-js";

export const Counter = () => {
    const [counter, setCounter] = createSignal(10);
    return (
        <>
            <h1 class="text-5xl">Counter</h1>
            <h3 class="text-xl">Current count: {counter()}</h3>
            <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(counter() + 1)}>
                Increment
            </button>
            <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(counter() - 1)}>
                Decrement
            </button>
        </>
    );
};
