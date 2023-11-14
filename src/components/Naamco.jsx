import React, { useEffect, useState, useMemo } from 'react'
import Features from './Features'
import Nav from './Nav'

import '../styles/Header.css'

export default function Naamco() {
    const [features, setFeatures] = useState([])
    const [services, setServices] = useState([])
    const [description, setDescription] = useState()
  
    useEffect(() => {
      fetch('json/features.json')
      .then(response => response.json())
      .then(datos => {
        setFeatures(datos.feature_namco)
        setServices(datos.services_namco)
        setDescription(datos.namco_description)
      })
    }, [])
  return (
    <div className='sections-box'>
        <Nav ismain={false} />
        <Features features={features} services={services} feature_name={'NAMCO'} description={description} />
    </div>
  )
}
