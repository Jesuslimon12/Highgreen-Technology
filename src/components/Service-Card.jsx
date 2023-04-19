import React from 'react'
import '../styles/Service-Card.css'
export default function Service_Card(props) {
  const icon = props.icon
  const title = props.title

  /**
   * service
   *  service__icon
   *  service__title
   * **/
  return (
    <div className='service'>
        <img src={icon} alt=""  className='service__icon'/>
        <span className='service__title'> {title} </span>
    </div>
  )
}
