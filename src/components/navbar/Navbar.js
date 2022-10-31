import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import styles from './Navbar.module.scss'

export default function Navbar() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

    return (
        <>
            <nav className={styles.navbar}>
                <p className={styles.navTitle}>GAMEtheca</p>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.navActive : styles.navItem)} >games</NavLink>
                <NavLink to="/purchased" className={({ isActive }) => (isActive ? styles.navActive : styles.navItem)} >purchased</NavLink>
                <NavLink to="/wishlist" className={({ isActive }) => (isActive ? styles.navActive : styles.navItem)}>wishlist</NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.navActive : styles.navItem)}>profile</NavLink>
                {currentUser?.email === "dorjaskenderovic@gmail.com" ?
                    <NavLink to="/addGame" className={({ isActive }) => (isActive ? styles.navActive : styles.navItem)}>add game</NavLink> :
                    ""}
            </nav>

            <Outlet />
        </>
    )
}