import React, { useEffect, useState, useMemo } from 'react'
import Main_title from './Main-title'
import Card from './Card'
import Feature_Item from './Feature-Item'
import '../styles/Features.css'

export default function (props) {
  const features = props.features
  const services = props.services
  const feature_name = props.feature_name
  

  const ShowServices = useMemo(() => {
    
    let items = services?.map((service) => 
      
      <Card key={service.id} icon={service.icon} title={service.title} />
  
    )

    return items

  },[services])

  const ShowFeatures = useMemo(() => {
    
    let items = features?.map((features) => 
      
    <Feature_Item key={features.id} advantages={features.advantage} img={features.img} feature_num={features.feature_number} badge_title={features.badge_title} title={features.title} description={features.description} letter_spacing={features.letter_spacing} />
  
    )

    return items

  },[features])
 
  /**
   * features
   *  features__services-box
   *  features__items-box
   * **/
  return (
    <div className='features' id='features'>
       <Main_title bgtitle={'FEATURES'} title={feature_name} letter_spacing={'secondary'} font_size={'normal'} />
       <p className='main-text'>Highgreen Technology's purpose is to simplify the cleaning solution search process for customers by providing a hand-selected product line of only the best solutions for their cleaning needs. <br /> Our current catalog is comprised of the newest Haaga line of sweepers. If our word isnt enough to convince you, here are <span className='main-text--active'> 4 features </span>we love about our product selection: </p>
       
       <div className='features__services-box'>
          {
            ShowServices
          }
       </div>

       <div className='features__items-box'>
          {
            ShowFeatures
          }
       </div>

       <a href="#" className='btn btn--hero'>View {feature_name} Products</a>
    </div>
  )
}
