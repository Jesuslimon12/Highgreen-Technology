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

  return (
    <div className='main_feature_item'>

      <div className='feature_item_container'>
        <img src={img} alt="" />
        <div className='feature_item'>
            <span>{badge_title}</span>
            <Main_title bgtitle={feature_num} title={title} />
        </div>
      </div>

      <div className='feature_items_advantages_contianer'>
        {
          advantages?.map((advantage, id) => 
          
            <span key={id} className='feature_item_advantage'>{advantage}</span>
      
          )
        }
       
      </div>

      <p className='feature_item_description' dangerouslySetInnerHTML={{__html: description}}></p>

    </div>
  )
}
