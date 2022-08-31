import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export const NavBar = () => {

  return (
    <div className='navlink-menu'>
      <NavLink to="/" id='a-button' activeClassName="navlink-button">Home</NavLink>
      <NavLink to="/Projetos" id='a-button' activeClassName="navlink-button">Serviços</NavLink>
      <NavLink to="/Contato"  id='a-button' activeClassName="navlink-button">Contato</NavLink>
    </div>
  )
}
