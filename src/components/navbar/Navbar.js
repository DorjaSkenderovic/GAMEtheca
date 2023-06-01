import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./Navbar.module.scss";
import Burger from "./Burger";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const toggleButton = () => {
    setActive(!active);
    if (active) {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navTitle}>GAMEtheca</div>
        <div className={styles.burgerIcon} onClick={toggleButton}>
          <Burger />
        </div>
        <div className={active ? styles.navItemsMobile : styles.navItems}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.navItem
            }
            onClick={active ? toggleButton : ""}
          >
            games
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.navItem
            }
            onClick={active ? toggleButton : ""}
          >
            wishlist
          </NavLink>
          <NavLink
            to="/purchased"
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.navItem
            }
            onClick={active ? toggleButton : ""}
          >
            purchased
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.navActive : styles.navItem
            }
            onClick={active ? toggleButton : ""}
          >
            profile
          </NavLink>
          {currentUser?.email === "dorjaskenderovic@gmail.com" ? (
            <NavLink
              to="/addGame"
              className={({ isActive }) =>
                isActive ? styles.navActive : styles.navItem
              }
              onClick={active ? toggleButton : ""}
            >
              add game
            </NavLink>
          ) : (
            ""
          )}
        </div>
        <Outlet />
      </nav>
    </>
  );
}
