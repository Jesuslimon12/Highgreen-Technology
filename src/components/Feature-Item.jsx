import React,{useState} from 'react'
import Main_title from './Main-title'
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

  
  return (
    <div className='feature'>

      <div className='feature__card'>
        <img src={img[1]} alt={img[0]} className='feature__card-img' />
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
