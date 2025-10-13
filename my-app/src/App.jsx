import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";
import Card from "./Card";
import { useFetch } from "./hooks/useFetch"; 
import useFilteredTodos from "./hooks/useFilteredTodos";
import { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "./providers/TodoContext";

function App() {

  //  Global useContext
  const { todos, loading, error } = useContext(TodoContext);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  //  Local state
  const myItems = ["Mela", "Banana", "Arancia"];
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => setSearchTerm(event.target.value);

  //  Usa il tuo hook personalizzato (rinominando variabili)
  const { data, loading: loadingFetch, error: errorFetch } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const filteredTodos = useFilteredTodos(data, searchTerm);

  // useRef
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Main App</h1>

      <HelloWorld />
      <Counter />
      <TextInput />
      <h5 style={{ fontSize: "20px" }}>Login Form</h5>
      <LoginForm />

      <h5 style={{ fontSize: "20px" }}>Usare ref</h5>
      <UncontrolledInput />

      <h5 style={{ fontSize: "20px" }}>Render List of elements</h5>
      <ItemList items={myItems} />

      <h5 style={{ fontSize: "20px" }}>Use props.children</h5>
      <Card>
        <h3>Prima Card</h3>
        <p>Questo contenuto è passato come children al componente Card.</p>
      </Card>

      <Card>
        <h3>Seconda Card</h3>
        <ul>
          <li>Elemento A</li>
          <li>Elemento B</li>
        </ul>
      </Card>

      <h5 style={{ fontSize: "20px" }}>Implement hook useFetch</h5>
      {loadingFetch && <p>Caricamento dati...</p>}
      {errorFetch && <p>Errore: {errorFetch}</p>}
      {data && (
        <ul>
          {filteredTodos?.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}

      <h5 style={{ fontSize: "20px" }}>Input searching form</h5>
      <input
        type="text"
        placeholder="search your item"
        value={searchTerm}
        onChange={handleInput}
      />

      <h5 style={{ fontSize: "20px" }}>Input using useRef</h5>
      <input ref={inputRef} type="text" placeholder="Focus input" />

      <h5 style={{ fontSize: "20px" }}>Global useContext</h5>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} — {todo.done ? "true" : "false"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
