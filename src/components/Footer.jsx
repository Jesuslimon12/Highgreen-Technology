import React from 'react'
import '../styles/Footer.css'
import Highgreen from '../assets/Logo_Highgreen.svg'
import test from '../assets/ImgProduct1.svg'

export default function Footer() {
  return (
    <footer className='footer'>

    

  

        <nav className='nav nav--footer'>

          <div className='nav__logo-box'>
            <img src={Highgreen} alt="" className='nav__logo'/>
          </div>

          <p className='nav__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur ornare rhoncus. Nam massa sapien, condimentum at est at, cursus laoreet purus.</p>

          <ul className='nav__lists-box'>
            <li className='nav__list'><a className='nav__link' href="#about">About Us</a></li>
            <li className='nav__list'><a className='nav__link' href="#products">Products</a></li>
            <li className='nav__list'><a className='nav__link' href="">Distributor</a></li>
            <li className='nav__list'><a className='nav__link' href="">Contact Us</a></li>
          </ul>

        </nav>

        <div className='footer__copyright'>HighGreen Tech &copy; 2023 All rights reserved</div>
      
  
        
        

    </footer>
  )
}
