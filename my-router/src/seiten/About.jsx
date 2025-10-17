import React from "react";
//poiche aggiungo layout comune non mi serve piu Link
import { Link } from "react-router-dom"

function About() {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>About Page</h1>
            <p>This page contains important information about this project!</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default About;