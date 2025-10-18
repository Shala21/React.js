
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./seiten/Home";
import About from "./seiten/About";
import Layout from "./Layout";
import TodoDetail from "./seiten/TodoDetail";


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
      {/* Layout comune con Navbar e Outlet */}
      <Route path="/" element={<Layout />}>
        {/* Pagina principale */}
        <Route index element={<Home />} />
        {/* Pagina About */}
        <Route path="about" element={<About />} />
        {/* Pagina dettaglio To-Do */}
        <Route path="todo/:id" element={<TodoDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
