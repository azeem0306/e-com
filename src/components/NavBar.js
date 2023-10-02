import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../App";

export const NavBar = () => {
    const {searchItem, setSearchItem} = useContext(AppContext)
;    return (

        <div className="navContainer">
            <Link className="navItems" to="/">DRAO</Link>
            <Link className="navItems" to="/">Home</Link>
            <Link className="navItems" to="/all-products">Products</Link>
            <div className="navSearch">
                <Link to="/search">
                    <input className="navSearchInput" type="text" placeholder="Search products..." onChange={event => {setSearchItem(event.target.value)}} />
                </Link>
            </div>
            <Link className="navItems"  to="/profile">My Profile</Link>
            <Link className="navItems" to="/cart">Cart</Link>
            <Link className="navItems" to="/">Contact Us</Link>
        </div>
    );
}

// <button className="navSearchButton">&#x1F50E;</button>
