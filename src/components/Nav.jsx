import React from 'react'
import { HashLink  } from "react-router-hash-link";
import Logo from '../assets/Logo_Highgreen.svg'
import Logo_2 from '../assets/Logo_Highgreen-2.svg'
import HamburgerIcon from '../assets/icon-hamburger.svg'
import '../styles/Nav.css'

export default function Nav(props) {
  const isnavmain = props.ismain 
  return (
    <nav className={`nav ${!isnavmain ? 'nav-secondary' : '' }`}>
        <HashLink className='nav__logo-box' to={'/'} >
          <img src={isnavmain ? Logo : Logo_2} alt="logo" className='nav__logo'/>
        </HashLink>

        <ul className='nav__lists-box nav__list-desktop'>
          <li className='nav__list'><HashLink  className='nav__link' to={'/#about'} >About</HashLink ></li>
          <li className='nav__list'><HashLink  className='nav__link' to={"/#products"}>Products</HashLink ></li>
          <li className='nav__list'><HashLink  className='nav__link' to={isnavmain ? '/#about' : '#features'}>Distributor</HashLink ></li>
          <li className='nav__list'><HashLink  className='nav__link' to={"/#contact"}>Contact Us</HashLink ></li>
        </ul>

        <button className='nav__mobile-button'>
            <img src={HamburgerIcon} alt="Hamburger Icon" className='nav__mobile-icon'/>
        </button>
    </nav>
  )
}
