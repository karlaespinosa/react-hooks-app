import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav nav-pills justify-content-end'>
        <li className='nav-item'>
          <NavLink
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            to='/about'
          >
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            to='/login'
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
