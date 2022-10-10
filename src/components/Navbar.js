import React, {useState, useEffect} from "react";
import { Outlet, NavLink } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase'

export default function Navbar(){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
        })
      }, [])

    return(
        <>
            <nav className="navbar">
                <p className="nav-title">GAMEtheca</p>
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")} >games</NavLink>
                <NavLink to ="/purchased" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")} >purchased</NavLink>
                <NavLink to ="/wishlist" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")}>wishlist</NavLink>
                <NavLink to ="/profile" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")}>profile</NavLink>
                {currentUser?.email === "dorjaskenderovic@gmail.com" ? 
                <NavLink to ="/addGame" className={({ isActive }) => (isActive ? "nav-active" : "nav-item")}>add game</NavLink> :
                ""}
            </nav>

            <Outlet />
        </>
    )
}