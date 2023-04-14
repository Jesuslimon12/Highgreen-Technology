import React from 'react'
import Highgreen from '../assets/Logo_Highgreen.svg'
import '../styles/header.css'

export default function Header() {
  /**
   * header
   *  header__nav-box
   *    header__logo-box
   *        header__logo
   *    
   *    header__nav
   *      header__nav-item
   * 
   *   header__text-box
   *    heading-primary
   *      heading-primary--main
   *      heading-primary--sub
   *    btn-heading
   *   
   *   btn-show-more   
   *     
   * nav
   *  nav__logo-box
   *    nav_logo
   * 
   *  nav__lists-box
   *    nav__list
   *      nav__link
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

        <a href="#" className='btn btn--heading'>Let’s clean your mess, together.</a>
      </div>

      <a href='#' className='btn btn--showmore'>
        Show More
      </a>
    </header>
  )
}
