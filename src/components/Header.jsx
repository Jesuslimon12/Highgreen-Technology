import React from 'react'
import Highgreen from '../assets/Highgreen.svg'
import '../styles/header.css'

export default function Header() {
  return (
    <section className='main_header'>
      <nav className='main_nav'>
        <ul className='main_nav_list'>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href=""><img src={Highgreen} alt="" /></a></li>
          <li><a href="">Distributor</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </nav>

      <div className='main_header_titles'>
        <h1>Discover the future of cleaning</h1>
        <h4>Revolutionary High-Performance Sweepers</h4>
      </div>

      <button className='header_button'>
        Show More
      </button>

    </section>
  )
}
