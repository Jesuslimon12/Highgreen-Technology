import React, { useEffect, useState, useMemo } from 'react'
import Main_title from './Main-title'
import Service_Card from './Service-Card'
import Feature_Item from './Feature-Item'

export default function () {
  const [features, setFeatures] = useState([])
  const [services, setServices] = useState([])
  


  useEffect(() => {
    fetch('json/features.json')
    .then(response => response.json())
    .then(datos => {
      setFeatures(datos.feature_items)
      setServices(datos.features_services)
    })
  }, [])

  
  const ShowServices = useMemo(() => {
    
    let items = services?.map((service) => 
      
      <Service_Card key={service.id} icon={service.icon} title={service.title} />
  
    )

    return items

  },[services])

  const ShowFeatures = useMemo(() => {
    
    let items = features?.map((features) => 
      
    <Feature_Item key={features.id} advantages={features.advantage} img={features.img} feature_num={features.feature_number} badge_title={features.badge_title} title={features.title} description={features.description} />
  
    )

    return items

  },[features])
 
  return (
    <div className='main_features'>
       <Main_title bgtitle={'FEATURES'} title={'High Quality Products'} />
       <p>Highgreen Technology's purpose is to simplify the cleaning solution search process for customers by providing a hand-selected product line of only the best solutions for their cleaning needs. <br /> Our current catalog is comprised of the newest Haaga line of sweepers. If our word isnt enough to convince you, here are <span className='highlighted_text'> 4 features </span>we love about our product selection: </p>
       
       <div className='service_container'>
          {
            ShowServices
          }
       </div>

       <div className='fetures_items_container'>
          {
            ShowFeatures
          }
       </div>
    </div>
  )
}
