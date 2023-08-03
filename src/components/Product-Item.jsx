import React, { useEffect, useLayoutEffect } from 'react'
import { useState, useMemo, useRef} from "react"
import IconRightGreen from '../assets/RightIconGreen.svg'
import IMAGES from '../images/ProductImgs'
import '../styles/Product-Item.css'

export default function Item_Product(props) {
  const containerRef = useRef()

  const [dimensions, setDimensions] = useState();
  const model = props.model
  const description = props.description
  const characteristics = props.characteristics
  const galleryimg = props.gallery
  const [Arrayimg, setArrayimg] = useState([])
  const [Positionimg, SetPositionimg] = useState(1)
  const [X, setX] = useState(0)
  const ctranslateX = 'translateX(-'+X+'px)'
  var css = {
    transform: ctranslateX
  }


  useEffect(() => {
    

    const transitionEnd = () => {
      if(Positionimg <= 1){
        containerRef.current.style.transitionDuration = '0ms'
        setX(dimensions * Positionimg)
      }

      if(Positionimg >= Arrayimg.length){
        containerRef.current.style.transitionDuration = '0ms'
        setX(dimensions * Arrayimg.length)
      }

    }
    
    document.addEventListener('transitionend', transitionEnd)
    return () => {
      document.removeEventListener('transitionend', transitionEnd)
    }
    
  }, [Positionimg, Arrayimg])


  


  const ShowCharacteritics = useMemo(() => {
    
    let items = characteristics?.map((item, id) => 
      <span className='product__characteristic' key={id}>{item.characteristic} <span className='text--black'> {item.description} </span> </span>
    )

    return items

  },[props.characteristics]) 
  
  const ShowCarousel = useMemo(() => {
    if(Arrayimg.length > 1){
      let items = Arrayimg?.map((img, id) => 
      
        <img className='carousel__img' key={id} src={img} alt="" />
  
      )

      return [
        <img  className='carousel__img'  key={Arrayimg.length + 1} src={Arrayimg[Arrayimg.length-1]} alt="" />,
        ...items,
       <img  className='carousel__img' key={Arrayimg.length + 2} src={Arrayimg[0]} alt="" />,
      ]
    }

    return <img src={Arrayimg[0]} alt="" />

  },[Arrayimg])

  useLayoutEffect(() => {
    

    setGallery(galleryimg)
    if(screen.width < 900){
 
      setX(325* 1)
      setDimensions(325);
    }else{
      setX(650* 1)
      setDimensions(650);
   
    }


    
   
  },[])

  const nextImg = () => {
    
    containerRef.current.style.transitionDuration = '400ms'
    if(Positionimg >= Arrayimg.length){
      setX(dimensions * (Arrayimg.length + 1))
      SetPositionimg(1)  
    }else{
      setX(dimensions * (Positionimg + 1))
      SetPositionimg((prev) =>  ++prev)
    }
  }


  const previousImg = () => {
    containerRef.current.style.transitionDuration = '400ms'
    if(Positionimg <= 1){
      setX(0)
      SetPositionimg(Arrayimg.length)
    }else{
      setX(dimensions * (Positionimg - 1))
      SetPositionimg((prev) =>  --prev)
    }
  }

  function setGallery(name){
    let [element] = IMAGES.filter((elements) => elements.name === name)
    let {gallery} = element
    setArrayimg((prevState) => [...prevState, ...gallery])  
  }

  /**
   * product
   *  carousel
   *    carousel__control
   *    carousel__imgs-box
   * 
   * 
   *  product__details-box
   *    product__detail
   *      product__name
   *      product__description
   *    
   *    product__characteristics-box
   *       product__characteristic
   * 
   *       btn--detailview
   *      
   *    
   * **/
  
   return (
    <div className='product'>
        <div className='carousel'>   
            <span className='carousel__control carousel__control--left' onClick={previousImg}></span>
            
            <div className='carousel__imgs-box' ref={containerRef} style={css}>
            {
              ShowCarousel
            }
            </div>
           
            <span className='carousel__control carousel__control--right' onClick={nextImg}></span>
        </div>

        <div className='product__details-box'>
          { /*<div className='product__detail'>*/}
          <h1 className='product__name'> {model}</h1>
          <p className='product__description'> {description} </p>

          <div className='product__characteristics-box'>
            {
              ShowCharacteritics
            }
              
          </div>
          {/*</div>*/} 

            
          <a href='#' className='btn-view'>
            <span className='btn-view--title'>View Product</span> 
            <img className='btn-view--icon' src={IconRightGreen} alt="" />
          </a> 
        </div>


    </div>
  )
}
