import React, { useEffect, useLayoutEffect } from 'react'
import { useState, useMemo, useRef} from "react";
import Product1 from '../assets/ImgProduct1.svg'
import Product2 from '../assets/ImgF2.svg'
import Product3 from '../assets/ImgF3.svg'
import IconRightGreen from '../assets/RightIconGreen.svg'
import '../styles/Product-Item.css'

export default function Item_Product(props) {
  const containerRef = useRef()
  const product_name = props.name
  const description_product = props.description
  const [Arrayimg, setArrayimg] = useState([Product1, Product2, Product3])
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
        setX(650 * Positionimg)
      }

      if(Positionimg >= Arrayimg.length){
        containerRef.current.style.transitionDuration = '0ms'
        setX(650 * Arrayimg.length)
      }

    }
    
    document.addEventListener('transitionend', transitionEnd)
    return () => {
      document.removeEventListener('transitionend', transitionEnd)
    }
    
  }, [Positionimg, Arrayimg])
  
  const characteristics =
   [ {characteristic:'Weight', description: '38lb'}, {characteristic: 'Cleaning', description: '31 inches'}, {characteristic:'Brushes' ,description:'Triple brush turbo sweeper'},
   {characteristic: 'Waste container', description:'13.2 gallon'}, {characteristic:'System', description: 'Belt-Free'},{characteristic: 'Warranty', description:'2yr overall warranty'}  ]
  
  const ShowCarousel = useMemo(() => {
    if(Arrayimg.length > 1){
      let items = Arrayimg?.map((img, id) => 
      
        <img className='carousel__img' key={id} src={img} alt="" />
  
      )

      return [
        <img  className='carousel__img'  key={Arrayimg.length + 1} src={Arrayimg[Arrayimg.length-1 ]} alt="" />,
        ...items,
       <img  className='carousel__img' key={Arrayimg.length + 2} src={Arrayimg[0]} alt="" />,
      ]
    }

    return <img src={Arrayimg[0]} alt="" />

  },[Arrayimg])

  useLayoutEffect(() => {
    setX(650 * 1)
  },[])

  const nextImg = () => {
    
    containerRef.current.style.transitionDuration = '400ms'
    if(Positionimg >= Arrayimg.length){
      setX(650 * (Arrayimg.length + 1))
      SetPositionimg(1)  
    }else{
      setX(650 * (Positionimg + 1))
      SetPositionimg((prev) =>  ++prev)
    }
  }


  const previousImg = () => {
    containerRef.current.style.transitionDuration = '400ms'
    if(Positionimg <= 1){
      setX(0)
      SetPositionimg(Arrayimg.length)
    }else{
      setX(650 * (Positionimg - 1))
      SetPositionimg((prev) =>  --prev)
    }
  }

  /**
   * product
   *  product__carousel-box
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
            <div className='product__detail'>
              <h1 className='product__name'> {product_name} </h1>
              <p className='product__description'> {description_product} </p>

              <div className='product__characteristics-box'>
                {
                  characteristics?.map((item, id) => 
                    <span className='product__characteristic' key={id}>{item.characteristic} <span className='text--black'> {item.description} </span> </span>
                  )
                }
              
              </div>
            </div>

            
            <a href='#' className='btn btn--view'>
              <span className='btn--view-title'>View Product</span> 
              <img className='btn--view-icon' src={IconRightGreen} alt="" />
            </a> 
            
                
            
        </div>


    </div>
  )
}
