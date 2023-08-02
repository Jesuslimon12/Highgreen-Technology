import React from 'react'
import Logo from '../assets/Logo_Highgreen.svg'
import Logo_2 from '../assets/Logo_Highgreen-2.svg'
import HamburgerIcon from '../assets/icon-hamburger.svg'

export default function Nav(props) {
  const isnavmain = props.ismain 
  return (
    <nav className={`nav ${!isnavmain ? 'nav-secondary' : '' }`}>
        <div className='nav__logo-box'>
        <img src={isnavmain ? Logo : Logo_2} alt="" className='nav__logo'/>
        </div>

        <ul className='nav__lists-box nav__list-desktop'>
            <li className='nav__list'><a className='nav__link' href="#about">About Us</a></li>
            <li className='nav__list'><a className='nav__link' href="#products">Products</a></li>
            <li className='nav__list'><a className='nav__link' href="#features">Distributor</a></li>
            <li className='nav__list'><a className='nav__link' href="#contact">Contact Us</a></li>
        </ul>

        <button className='nav__mobile-button'>
            <img src={HamburgerIcon} alt="Hamburger Icon" className='nav__mobile-icon'/>
        </button>
    </nav>
  )
}
