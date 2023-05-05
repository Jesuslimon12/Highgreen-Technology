import React,{useState} from 'react'
import '../styles/Card.css'
import Turbosystem_Icon from '../assets/icon-turbosystem.svg'
import Easytouse_Icon from '../assets/icon-easytouse.svg'
import Lessmaintenance_Icon from '../assets/icon-lessmaintenance.svg'
import Ecofriendly_Icon from '../assets/icon-ecofriendly.svg'


export default function Card(props) {
  const icon = props.icon
  const title = props.title


  /**
   * service
   *  service__icon
   *  service__title
   * **/
  function GetIcon(url){
    switch (url) {
      case 'turbosystem':
        return <img src={Turbosystem_Icon} alt="turbosystem_icon"  className='card__icon'/>

      case 'easytouse':
        return <img src={Easytouse_Icon} alt="turbosystem_icon"  className='card__icon'/>

      case 'lessmaintenance':  
         return <img src={Lessmaintenance_Icon} alt="lessmaintenance_icon"  className='card__icon'/>

      case 'ecofriendly':  
         return <img src={Ecofriendly_Icon} alt="ecofriendly_icon"  className='card__icon'/>

      default:
        break;
    }
  }

  return (
    <div className='card'>
        {GetIcon(icon)}
        <span className='card__title'> {title} </span>
    </div>
  )
}
