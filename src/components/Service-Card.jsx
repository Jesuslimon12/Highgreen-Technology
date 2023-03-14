import React from 'react'

export default function Service_Card(props) {
  const icon = props.icon
  const title = props.title
  return (
    <div className='main_service_card'>
        <img src={icon} alt="" />
        <span> {title} </span>
    </div>
  )
}
