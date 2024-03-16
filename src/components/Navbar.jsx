import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
export default function Navbar() {
    const [showNav, setShowNav] = useState(false);


    return (
        <nav>
            <h1>TextUtils</h1>
            <input id="check" type="checkbox" /><label htmlFor="checkbox">Click</label>
            <div className='navs'>

                <NavLink id="Navlinks" className={(e) => { return e.isActive ? "color" : "" }} to="/">Home</NavLink>
                <NavLink id="Navlinks" className={(e) => { return e.isActive ? "color" : "" }} to="/about">About</NavLink>
            </div>
        </nav>
    )
}
