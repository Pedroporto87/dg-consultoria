import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  return (
    <div className='navlink-menu'>
      <NavLink to="/" activeClassName="navlink-button">Home</NavLink>
      <NavLink to="/Quemsomos" activeClassName="navlink-button">Quem Somos</NavLink>
      <NavLink to="/Projetos" activeClassName="navlink-button">Projetos</NavLink>
      <NavLink to="/Contato" activeClassName="navlink-button">Contato</NavLink>
    </div>
  )
}
