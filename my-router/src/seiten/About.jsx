import React from "react";
import { useNavigate } from "react-router-dom";
//poiche aggiungo layout comune non mi serve piu Link
import { Link } from "react-router-dom"

function About() {
    const navigate = useNavigate(); // l’hook va qui, nel componente principale

    const goBack = () => {
        navigate("/"); // cosi mi fa tronare alla home
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>About Page</h1>
            <p>This page contains important information about this project!</p>

            <button onClick={goBack} >Go Back To Home Page</button>

            {/* resta come commento perche uso useNavigate
            <Link to="/">Go to Home</Link>
            */}
        </div>
    );
}

export default About;