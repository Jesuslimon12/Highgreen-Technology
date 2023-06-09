import React from 'react'
import Main_title from './Main-title'
import IconLighter from '../assets/Lighter.svg'
import '../styles/About.css'

export default function About() {
  /** 20 4 35px**/
  return (
    <div className='about' id='about'>
      <Main_title bgtitle={'WHO WE ARE'} title={'Highgreen Technology'} letter_spacing={'primary'} font_size='normal'/>
      <p className='main-text'>At Highgreen Technology, we are revolutionizing the cleaning industry with our high-performance compact sweepers powered by <span className='main-text--active'>Haaga's patented belt-less disk brush technology.</span> 
      <br /> Say goodbye to messy and unreliable belt-driven sweepers and enjoy outstanding cleaning results with ease of use and minimal maintenance. <u> Whether you're a small business or a factory,
      our sweepers will provide a better cleaning experience for your organization.</u>  </p>

      <figcaption>
        <img src={IconLighter} alt="" />
      </figcaption>
     
      

    </div>
  )
}
