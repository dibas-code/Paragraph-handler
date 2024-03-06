import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='navbar'>
            <h1>TextUtils</h1>
            <div className='nav'>
                <NavLink style={{ color: "white", }} className={(e) => { return e.isActive ? "color" : "" }} to="/">Home</NavLink>
                <NavLink style={{ color: "white" }} className={(e) => { return e.isActive ? "color" : "" }} to="/about">About</NavLink>
            </div>
        </div>
    )
}
