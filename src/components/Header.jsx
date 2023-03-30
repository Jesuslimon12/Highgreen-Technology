import React from 'react'
import Highgreen from '../assets/Logo_Highgreen.svg'
import '../styles/header.css'

export default function Header() {
  return (
    <header className='main_header'>
      <nav className='main_nav'>
        <div className='logo_container'>
          <img src={Highgreen} alt="" className='logo'/>
        </div>
        <ul className='main_nav_list'>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="">Distributor</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </nav>

      <div className='text_box'>
        <h1 className='main_heading'>
         <span className='heading_primary'>Discover the <span>future</span> of cleaning</span>
         <span className='heading_secondary'>Revolutionary High-Performance Sweepers</span> 
        </h1>
        <a href="#" className='btn btn_text_box'>Let’s clean your mess, together.</a>
      </div>

      <a href='#' className='btn header_button'>
        Show More
      </a>
    </header>
  )
}
