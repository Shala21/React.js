// Contatore semplice - parte 2
import { useState } from "react";

// Crea un contatore semplice
function Counter() {

    // dichiaro lo stato: count parte da 0
    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}> Increase</button>
        <button onClick={() => setCount(count - 1)}> Decrease</button>
    </div>
  )
}

export default Counter;
