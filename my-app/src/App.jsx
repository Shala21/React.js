import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import ItemList from "./ItemList";
import Card from "./Card";
import { useFetch } from "./useFetch"; //  importa l’hook
import useFilteredTodos  from "./useFilteredTodos"; //  importa l’hook
import { useState } from "react";


function App() {
  // dichiara uno sate
  
  const myItems = ["Mela", "Banana", "Arancia"];
  const [searchTerm, setSearchTerm] = useState();

  function handleInput(event) {
    setSearchTerm(event.target.value)
  }
  //  usa il tuo hook
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const fltredToDos = useFilteredTodos(data, searchTerm);


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
      <h5 style={{ fontSize: "20px" }}>Use props.children </h5>
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
      {loading && <p>Caricamento dati...</p>}
      {error && <p>Errore: {error}</p>}
      {data && (
        <ul>
          {fltredToDos?.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
      <h5 style={{ fontSize: "20px" }}>Input searchind form</h5>
      <input type="text" placeholder="search your item" value={searchTerm} onChange={handleInput} />

    </div>
  );
}

export default App;
