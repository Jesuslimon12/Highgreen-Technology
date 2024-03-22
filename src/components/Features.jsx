import React, { useEffect, useState, useMemo } from 'react'
import Main_title from './Main-title'
import Card from './Card'
import Feature_Item from './Feature-Item'
import IMAGES from '../images/FeatureImgs'
import '../styles/features.css'

export default function (props) {
  const features = props.features
  const services = props.services
  const feature_name = props.feature_name
  const description = props.description
  
  function findimg(name){
    return Object.entries(IMAGES).find(([key]) => key === name)
  }

  const ShowServices = useMemo(() => {
    
    let items = services?.map((service) => 
      
      <Card key={service.id} icon={service.icon} title={service.title} />
  
    )

    return items

  },[services])

  const ShowFeatures = useMemo(() => {
    
    let items = features?.map((features) => 
      
    <Feature_Item key={features.id} advantages={features.advantage} img={findimg(features.img)} feature_num={features.feature_number} badge_title={features.badge_title} title={features.title} description={features.description} letter_spacing={features.letter_spacing} />
  
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
       <p className='main-text' dangerouslySetInnerHTML={{__html: description}}></p>
       
       
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

       <a href="#" className='btn'>View {feature_name} Products</a>
    </div>
  )
}
