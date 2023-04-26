import React from 'react'
import Highgreen from '../assets/Logo_Highgreen.svg'
import '../styles/Header.css'

export default function Header() {
  /**
   * header
   *  nav
   *    nav__logo-box
   *        nav__logo
   *    
   *    nav___lists-box
   *      nav__list
   *      nav__link
   * 
   *   header__text-box
   *    heading-primary
   *      heading-primary--main
   *      heading-primary--sub
   *    btn-heading
   *   
   *   btn-show-more   
   *
   * * */
  return (
    <header className='header'>
      <nav className='nav'>

        <div className='nav__logo-box'>
          <img src={Highgreen} alt="" className='nav__logo'/>
        </div>

        <ul className='nav__lists-box'>
          <li className='nav__list'><a className='nav__link' href="#about">About Us</a></li>
          <li className='nav__list'><a className='nav__link' href="#products">Products</a></li>
          <li className='nav__list'><a className='nav__link' href="">Distributor</a></li>
          <li className='nav__list'><a className='nav__link' href="">Contact Us</a></li>
        </ul>

      </nav>

      <div className='header__text-box'>

        <h1 className='heading-primary'>
         <span className='heading-primary--main'>Discover the <span className='font-w-800'>future</span> of cleaning</span>
         <span className='heading-primary--sub'>Revolutionary High-Performance Sweepers</span> 
        </h1>

        <a href="#" className='btn-hero'>Let’s clean your mess, together.</a>
      </div>

      <a href='#' className='btn-show-more tranlsateY-3'>
        Show More
      </a>
    </header>
  )
}
