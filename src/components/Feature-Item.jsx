import React from 'react'
import Main_title from './Main-title'
import '../styles/Feature-Item.css'

export default function Feature_Item(props) {
  const img = props.img
  const feature_num = props.feature_num
  const badge_title = props.badge_title
  const title = props.title
  const description = props.description
  const advantages = props.advantages
  
  function check_paragraph_highlighted(paragraph){
    /*let arr = [...paragraph]
    arr?.map((character, id) => 
      if(character === '\''){
        console.log()
      }
      console.log(character)

    )*/

    /*let copy = paragraph
    let new_string = paragraph.indexOf('\'')
    let new_2 = copy.slice(new_string+1)

    let second = new_2.indexOf('\'')
    let second_pa =  new_2.slice(second+1) 

    let high = paragraph.substring(new_string+1, second+1)*/

    
    
   /* return <span className='highlighted_text'>{high}</span>*/
    
  }
  /**
   * feature
   *  feature__card-box
   *   feature__card-img
   *   feature__card-text-box  
   *      feature__card-text-badge
   *  
   * 
   *  feature__advantages-box
   *    feature__advantage
   * **/
  return (
    <div className='feature'>

      <div className='feature__card-box'>
        <img src={img} alt="" className='feature__card-img' />
        <div className='feature__card-text-box'>
            <span className='feature__card-text-badge'>{badge_title}</span>
            <Main_title bgtitle={feature_num} title={title} />
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
