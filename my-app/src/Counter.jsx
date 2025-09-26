import { useState, useEffect } from "react";

// Crea un contatore semplice
function Counter() {
    // Contatore semplice - parte 2

    // dichiaro lo stato: count parte da 0
    const [count, setCount] = useState(0);

    // sincronizza il titolo con il contatore
    useEffect(() => {
        document.title = `Counter ${count}`;
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            
            <button onClick={() => setCount(count + 1)}> Increase</button>
            <button onClick={() => setCount(count - 1)}> Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <input type="" />
        </div>
    )
}

export default Counter;
