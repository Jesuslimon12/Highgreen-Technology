import React from 'react'
import { Link } from "react-router-dom";
import Main_title from './Main-title'
import LogoHaaga from '../assets/Haaga-logo.svg'
import LogoNamco from '../assets/Namco-logo.svg'
import '../styles/about.css'

export default function About() {
  /** 20 4 35px**/
  return (
    <div className='about' id='about'>
      <Main_title bgtitle={'WHO WE ARE'} title={'Highgreen Technology'} letter_spacing={'primary'} font_size='normal'/>
      <p className='main-text'>At Highgreen Technology, we're not just a technology company; we're the bridge between impeccable cleaning and enterprise demands. Our selection is more than just products—it's a promise. A promise of performance, sustainability, and unmatched quality. We curate only the best from renowned vendors like Haaga and Namco. If you're an enterprise or a business owner seeking unparalleled cleaning solutions, you're in the right place.</p>

      
      <ul className='logo-box'>
          <li className='logo__list'>
            <Link to="/haaga"><img className='logo__img' src={LogoHaaga} alt="" /></Link>
            <Link to="/naamco"><img className='logo__img' src={LogoNamco} alt="" /></Link>
          </li>
      </ul>
     
      

    </div>
  )
}
