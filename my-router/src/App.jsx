
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./seiten/Home";
import About from "./seiten/About";
import Layout from "./Layout";

function App() {
  return (
    // Poiche aggiungo layout non mi serve questo pezzo in App.jsx
    //
    //<div>
    //  {/*NAVBAR: collegamenti visibili in ogni pagina */} 
    //  <nav style={{backgroundColor: "#f4f4f4",padding: "10px",textAlign: "center",}}>
    //    <Link to="/" style={{ margin: "0 15px" }}>
    //      Home
    //    </Link>
    //    <Link to="/about" style={{ margin: "0 15px" }}>
    //      About
    //    </Link>
    //  </nav>
    //  </div>

    <Routes>
      {/* Layout comune che contiene Navbar e Outlet */}
      <Route path="/" element={<Layout />}>
        {/* Rotta principale ("/") */}
        <Route index element={<Home />} />
        {/* Rotta "/about" */}
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
