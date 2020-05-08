import React from 'react';
import { NavLink } from 'react-router-dom';


export const Nav = () => (
  <header>
  <NavLink to ="/" activeClassName ="is-active" exact ={true}>Dashboard</NavLink>
  <NavLink to ="/create" activeClassName ="is-active">Add Post</NavLink>
  <NavLink to ="/edit" activeClassName ="is-active">Edit</NavLink>
  <NavLink to ="/login" activeClassName ="is-active">Login</NavLink>
  <NavLink to ="/profile" activeClassName ="is-active">Profile</NavLink>
  <NavLink to ="/read" activeClassName ="is-active">Read</NavLink>
  </header>
);


export default Nav;
