import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className={c.grid__side}>
      <div>
      <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={c.grid__item}>
        <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={`${c.grid__item} ${c.grid__border}`}>
        <NavLink to='/news'>News</NavLink>
        </div>
        <div className={c.grid__item}>
        <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={c.grid__item}>
        <NavLink to='/setting'>Setting</NavLink>
        </div>
          </aside>
  );
}

export default Navbar;