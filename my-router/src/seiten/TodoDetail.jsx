import { useState, useEffect } from "react";;
import { useParams, useNavigate } from "react-router-dom";

function TodoDetail() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTodo(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dettaglio To-Do</h1>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Descrizione:</strong> {todo.todo}</p>
            <p><strong>Completato:</strong> {todo.completed ? "Sì" : " No"}</p>

            <button onClick={() => navigate("/")}>Torna alla Home</button>
        </div>
    );
}

export default TodoDetail;