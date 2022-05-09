import React from 'react'
import logo from '../img/logo.jpeg';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='nav-container'>
          <div className='nav-logo'>
              <img src={logo} alt={logo} />
          </div>
          <div className='nav-title'>
              <h1><Link to="/">CUENTASTICOS</Link></h1>
              <h3>Cuentos divertidos para entretenerse</h3>
          </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Navbar
