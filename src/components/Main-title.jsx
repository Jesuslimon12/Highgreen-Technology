import React from 'react'
import '../styles/main-title.css'

export default function Main_title(props) {
  const bgtitle = props.bgtitle
  const title = props.title

  /**
   * main__title-box
   *  main__title--bg
   *  main__title--main
   * **/
  return (
    <div className='main__title-box'>
        <h1 className='main__title main__title--bg'> {bgtitle} </h1>
        <h1 className='main__title main__title--primary'> {title} </h1>
    </div>
  )
}
