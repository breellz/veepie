import React from 'react';
import { NavLink } from 'react-router-dom';


export const Nav = () => (
  <header className="nav">
  <div className="content-container nav-link">
  <NavLink className="nav-link__item" to="/dashboard" activeClassName= "is-active"><h3>Dashboard</h3></NavLink>
  <NavLink className="nav-link__item" to ="/create" activeClassName ="is-active"><h3>Add Post</h3></NavLink><br />
  <NavLink className="nav-link__item" to ="/profile" activeClassName ="is-active"><h3>Profile</h3></NavLink>
  </div>
  </header>
);


export default Nav;
