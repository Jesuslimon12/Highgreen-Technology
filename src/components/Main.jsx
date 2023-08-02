import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Products from '../components/Products'
import Contact_us from '../components/Contact-Us'

export default function Main() {
  return (
    <div>
        <Header />
        <div className='sections-box'>
            <About />
            <Products />
            <Contact_us />
        </div>
    
    </div>
  )
}
