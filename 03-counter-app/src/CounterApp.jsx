import { useState } from "react";

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)
    // let counter = 0;

    const counterIncrement = () => setCounter(c => c + 1)

    return <>
        <h2>El valor del contador es {counter}</h2>
        <button onClick={counterIncrement}>Incrementar contador +1</button>
    </>
}
