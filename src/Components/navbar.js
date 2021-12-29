import React, { useState, useEffect } from "react";
import "../CSS/navbar.css";
import { signOut } from "../services/firebase";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ user }) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = () => {
    let getTheme = localStorage.getItem("theme") || "light";
    if (getTheme === "light") {
      localStorage.setItem("theme", "dark");
      setIsDark(true);
      changeTheme();
    } else {
      localStorage.setItem("theme", "light");
      setIsDark(false);
      changeTheme();
    }
  };

  const changeTheme = () => {
    if (isDark) {
      document.body.setAttribute("data-theme", "dark");
    } else document.body.removeAttribute("data-theme");
  };

  const showMenu = () => {
    let navbarItems = document.querySelector(".navbar-list");
    if (isOpen) {
      navbarItems.classList.remove("show");
      setIsOpen(false);
    } else {
      navbarItems.classList.add("show");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    let getTheme = localStorage.getItem("theme") || "light";
    if (getTheme === "light") {
      setIsDark(false);
      if (isDark) {
        document.body.setAttribute("data-theme", "dark");
      } else document.body.removeAttribute("data-theme");
    } else {
      setIsDark(true);
      if (isDark) {
        document.body.setAttribute("data-theme", "dark");
      } else document.body.removeAttribute("data-theme");
    }
  }, [isDark]);
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <h1 className="navbar-logo-text">Notes App</h1>
        </div>
        <div className="ham">
          <GiHamburgerMenu onClick={showMenu} />
        </div>
        <div className="navbar-links">
          {!user ? (
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/" className="login">
                  Login
                </a>
              </li>
              <li className="navbar-item">
                {isDark ? (
                  <BsFillSunFill onClick={handleThemeChange} />
                ) : (
                  <BsMoonFill onClick={handleThemeChange} />
                )}
              </li>
            </ul>
          ) : (
            <ul className="navbar-list">
              <li className="navbar-item">
                <img className="profile" src={user.photoURL} alt="profile" />
                <span className="user">{user.displayName}</span>
              </li>
              <li className="navbar-item">
                <span className="logout" onClick={signOut}>
                  logout
                </span>
              </li>
              <li className="navbar-item">
                {isDark ? (
                  <BsFillSunFill onClick={handleThemeChange} />
                ) : (
                  <BsMoonFill onClick={handleThemeChange} />
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
