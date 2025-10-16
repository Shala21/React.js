
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./seiten/Home";
import About from "./seiten/About";

function App() {
  return (
    <div>
      {/*NAVBAR: collegamenti visibili in ogni pagina */} 
      <nav style={{backgroundColor: "#f4f4f4",padding: "10px",textAlign: "center",}}>
        <Link to="/" style={{ margin: "0 15px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 15px" }}>
          About
        </Link>
      </nav>

      {/* ROTTE: cambiano in base all’URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
