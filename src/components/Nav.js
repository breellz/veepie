import React from 'react';
import { NavLink } from 'react-router-dom';


export const Nav = () => (
  <header>

  <NavLink to="/dashboard" activeClassName= "is-active" exact ={true}>Dashboard</NavLink>
  <NavLink to ="/create" activeClassName ="is-active">Add Post</NavLink>
  <NavLink to ="/profile" activeClassName ="is-active">Profile</NavLink>
  </header>
);


export default Nav;
