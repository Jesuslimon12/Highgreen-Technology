import React from 'react'
import Main_title from './Main-title'
import Social_Media from './Social-Media-Icons'

export default function About() {
  return (
    <div className='main_about' id='about'>
       <Main_title bgtitle={'WHO WE ARE'} title={'Highgreen Technology'} />
       <p>At Highgreen Technology, we are revolutionizing the cleaning industry with our high-performance compact sweepers powered by Haaga's patented belt-less disk brush technology. Say goodbye to messy and unreliable belt-driven sweepers and enjoy outstanding cleaning results with ease of use and minimal maintenance. Whether you're a small business or a factory,
         our sweepers will provide a better cleaning experience for your organization. </p>
   
        <Social_Media/>

    </div>
  )
}