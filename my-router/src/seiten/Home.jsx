import React, { useEffect, useState } from "react";
//poiche aggiungo layout comune non mi serve piu Link
//import { Link } from "react-router-dom"

function Home() {

    // Stato locale per salvare i dati ricevuti dall'API
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);// per gestire il caricamento
    const [error, setError] = useState(null);// per gestire eventuali errori


    // useEffect serve per eseguire il fetch quando il componente viene caricato 
    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((res) => res.json()) // res.json() serve per convertire la risposta HTTP (in formato testo JSON) in un oggetto JavaScript per usare nel codice
            .then((data) => {
                setTodos(data.todos); // salviamo solo l’array "todos" dentro lo stato
                setLoading(false);  // fine caricament
            }) 
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // [] significa che esegue solo una volta al montaggio


    //Gestione stati diversi
    if (loading) return <p>Loading..</p>;
    if (error) return <p>Error: {error}</p>;



    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Home Page</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}> {todo.todo} </li>
                ))}
            </ul>
            {/*
            qui il link non to go back in caso serva lo rimtto
            <Link to="/about">About Page</Link>
            */}
        </div>
    );
}

export default Home;