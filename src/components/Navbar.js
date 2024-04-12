import React, {useState} from 'react'
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleChange = () => {
        setClicked(!clicked)
    }
  return (
    <nav>
         <div className="menu-icon" onClick={handleChange}>
            <i className={clicked ? "fa-solid fa-plus" : "fa-solid fa-bars"} ></i>
        </div>
        <div>
        <ul className={clicked ? "menu-list": "menu-list close"}>
            <Link to="/">
        <img src="https://th.bing.com/th?id=OIP.tu5yvoyO5oYFWYzLVOf-BwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="icon"/>
            </Link>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar