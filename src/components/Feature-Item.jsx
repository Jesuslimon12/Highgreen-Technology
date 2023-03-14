import React from 'react'
import Main_title from './Main-title'
import '../styles/Feature-Item.css'

export default function Feature_Item(props) {
  const img = props.img
  const title = props.title
  return (
    <div className='main_feature_item'>
        <img src={img} alt="" />
        <div className='about_feature_item'>
            <span><h1>{title}</h1>  </span>
            <Main_title bgtitle={title.replace('Feature', '')} title={'Large Selection of Exclusive and Unique Options'} />
        </div>
    </div>
  )
}
