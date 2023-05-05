import React,{useState} from 'react'
import Main_title from './Main-title'
import Product1 from '../assets/ImgF1.svg'
import Product2 from '../assets/ImgF2.svg'
import Product3 from '../assets/ImgF3.svg'
import Product4 from '../assets/ImgF4.svg'
import '../styles/Feature-Item.css'

export default function Feature_Item(props) {
  const img = props.img
  const feature_num = props.feature_num
  const badge_title = props.badge_title
  const title = props.title
  const description = props.description
  const advantages = props.advantages
  const letter_spacing = props.letter_spacing


   

  
  /**
   * feature
   *  feature__card
   *   feature__card-img
   *   feature__card-text-box  
   *      badge
   *  
   * 
   *  feature__advantages-box
   *    feature__advantage
   * **/
  
  function GetImg(url){
    switch (url) {
        case 'ImgF1':
          return <img src={Product1} alt="Feature_1" className='feature__card-img' />

        case 'ImgF2':
          return <img src={Product2} alt="Feature_2" className='feature__card-img' />

        case 'ImgF3':  
          return <img src={Product3} alt="Feature_3" className='feature__card-img' />

        case 'ImgF4':  
          return <img src={Product4} alt="Feature_4" className='feature__card-img' />

        default:
          break;
    }
  }

  
  return (
    <div className='feature'>

      <div className='feature__card'>
        {GetImg(img)}
        <div className='feature__card-text-box'>
            <span className='badge'>{badge_title}</span>
            <Main_title bgtitle={feature_num} title={title} letter_spacing={letter_spacing} font_size={'small'} />
        </div>
      </div>

      <div className='feature__advantages-box'>
        {
          advantages?.map((advantage, id) => 
          
            <span key={id} className='feature__advantage'>{advantage}</span>
      
          )
        }
       
      </div>

      <p className='main-text' dangerouslySetInnerHTML={{__html: description}}></p>

    </div>
  )
}
