import React from 'react'
import Highgreen from '../assets/Logo_Highgreen.svg'
import '../styles/header.css'

export default function Header() {
  /**
   * header
   *  header__nav
   *    header__nav-logo-box
   *        header__nav-logo
   *    
   *    header__nav-lists-box
   *      header__nav-list
   *      header__nav-link
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
      <nav className='header__nav'>

        <div className='header__nav-logo-box'>
          <img src={Highgreen} alt="" className='header__nav-logo'/>
        </div>

        <ul className='header__nav-lists-box'>
          <li className='header__nav-list'><a className='header__nav-link' href="#about">About Us</a></li>
          <li className='header__nav-list'><a className='header__nav-link' href="#products">Products</a></li>
          <li className='header__nav-list'><a className='header__nav-link' href="">Distributor</a></li>
          <li className='header__nav-list'><a className='header__nav-link' href="">Contact Us</a></li>
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
