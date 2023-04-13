import React from 'react'
import '../styles/main-title.css'

export default function Main_title(props) {
  const bgtitle = props.bgtitle
  const title = props.title

  /**
   * title-box
   *  title--bg
   *  title--main
   * **/
  return (
    <div className='title-box'>
        <h1 className='title--bg'> {bgtitle} </h1>
        <h1 className='title--main'> {title} </h1>
    </div>
  )
}
