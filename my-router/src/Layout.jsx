import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav style={{ backgroundColor: "#f4f4f4", padding: "10px", textAlign: "center", }}>
                <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
                <Link to="/about" style={{ margin: "0 15px" }}>About</Link>
            </nav>
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;