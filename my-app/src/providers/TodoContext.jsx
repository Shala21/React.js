import { createContext, useEffect, useState } from "react";

//  Crea il contesto
export const TodoContext = createContext(null);

// Definisci il provider (non usare "const function")
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]); // dati recuperati
  const [loading, setLoading] = useState(true); // stato di caricamento
  const [error, setError] = useState(null); // eventuali errori

  //  Recupero i dati dal server
  useEffect(() => {
    async function fetchTodos() {
      try {
        // CORRETTO: "fetch" (non "fatch")
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) throw new Error("Impossibile caricare i dati!");

        const data = await response.json();

        //  CORRETTO: usa data non result
        const formatted = data.slice(0, 10).map((todo) => ({
          id: todo.id,
          text: todo.title,
          done: todo.completed,
        }));

        setTodos(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  //  Ritorna il provider — attento alle parentesi!
  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};

/* 
SECONDO METODO PER useContext
export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Studiare React", done: false },
    { id: 2, text: "Fare la spesa", done: true },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
*/

export default TodoProvider;
