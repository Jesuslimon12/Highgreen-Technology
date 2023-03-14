import React from 'react'
import '../styles/main-title.css'

export default function Main_title(props) {
  const bgtitle = props.bgtitle
  const title = props.title
  return (
    <div className='main_title_container'>
        <h1 className='bg_title'> {bgtitle} </h1>
        <h1 className='title'> {title} </h1>
    </div>
  )
}
