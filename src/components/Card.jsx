import React from 'react'
import '../styles/Card.css'
export default function Card(props) {
  const icon = props.icon
  const title = props.title

  /**
   * service
   *  service__icon
   *  service__title
   * **/
  return (
    <div className='card'>
        <img src={icon} alt=""  className='card__icon'/>
        <span className='card__title'> {title} </span>
    </div>
  )
}
