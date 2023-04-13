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
   * * */
  return (
    <header className='header'>
      <nav className='header__nav-box'>

        <div className='header__logo-box'>
          <img src={Highgreen} alt="" className='header__logo'/>
        </div>

        <ul className='header__nav'>
          <li className='header__nav-item'><a href="#about">About Us</a></li>
          <li className='header__nav-item'><a href="#products">Products</a></li>
          <li className='header__nav-item'><a href="">Distributor</a></li>
          <li className='header__nav-item'><a href="">Contact Us</a></li>
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
