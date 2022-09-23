import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar(){


    return(
        <>
            <nav className="navbar">
                <p className="nav-title">GAMEtheca</p>
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")} >games</NavLink>
                <NavLink to ="/purchased" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")} >purchased</NavLink>
                <NavLink to ="/wishlist" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")}>wishlist</NavLink>
                <NavLink to ="/profile" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")}>profile</NavLink>
            </nav>

            <Outlet />
        </>
    )
}