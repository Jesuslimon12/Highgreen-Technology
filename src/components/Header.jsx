import React from 'react'
import Nav from './Nav'
import Highgreen from '../assets/Logo_Highgreen.svg'
import HamburgerIcon from '../assets/icon-hamburger.svg'
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
      <Nav ismain={true}/>

      <div className='header__text-box'>

        <h1 className='heading-primary'>
         <p className='heading-primary--main'>Discover the <span className='font-w-800'>future</span> of cleaning</p>
         <span className='heading-primary--sub'>Revolutionary High-Performance Sweepers</span> 
        </h1>

        <a href="#" className='btn btn--hero'><span>Let’s clean your mess, together.</span></a>
      </div>

      <a href='#about' className='btn-show-more tranlsateY-3'>
        Show More
      </a>
    </header>
  )
}
