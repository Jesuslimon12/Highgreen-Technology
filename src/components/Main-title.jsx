import React from 'react'
import '../styles/Main-Title.css'

export default function Main_title(props) {
  const bgtitle = props.bgtitle
  const title = props.title
  const letter_spacing = 'main__title--ls-'+props.letter_spacing
  const font_size = 'main__title-fs--'+props.font_size



  /**
   * main__title-box
   *  main__title--bg
   *  main__title--main
   * **/
  return (
    <div className='main__title-box'>
        <h1 className={'main__title main__title--bg ' + letter_spacing}> {bgtitle} </h1>
        <h1 className={'main__title main__title--primary ' + font_size}> {title} </h1>
    </div>
  )
}
