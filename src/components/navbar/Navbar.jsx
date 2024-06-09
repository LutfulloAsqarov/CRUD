import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header id="header">
            <div className="navbar">
                <Link to={"/"}>
                    <h2>CRUD</h2>
                </Link>
                <div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/create-user"}>Create product</NavLink>
                    <NavLink to={"/all-users"}>
                        All products <sup>0</sup>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
