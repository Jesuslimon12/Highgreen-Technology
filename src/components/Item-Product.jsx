import React, { useEffect, useLayoutEffect } from 'react'
import { useState, useMemo, useRef} from "react";
import Product1 from '../assets/ImgProduct1.svg'
import Product2 from '../assets/ImgF2.svg'
import Product3 from '../assets/ImgF3.svg'
import IconRightGreen from '../assets/RightIconGreen.svg'
import '../styles/Item-Product.css'

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
      
        <img key={id} src={img} alt="" />
  
      )

      return [
        <img  key={Arrayimg.length + 1} src={Arrayimg[Arrayimg.length-1 ]} alt="" />,
        ...items,
       <img  key={Arrayimg.length + 2} src={Arrayimg[0]} alt="" />,
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

  
   return (
    <div className='main_item_product'>
        <div className='img_product_container'>   
            <span onClick={previousImg}></span>
            
            <div ref={containerRef} style={css}>
            {
              ShowCarousel
            }
            </div>
           
            <span onClick={nextImg}></span>
        </div>

        <div className='main_about_product'>
            <div className='description_product_container'>
              <h1> {product_name} </h1>
              <p> {description_product} </p>

              <div className='characteristics_product_container'>
                {
                  characteristics?.map((item, id) => 
                    <span key={id}>{item.characteristic} <span> {item.description} </span> </span>
                  )
                }
              
              </div>
            </div>

            <span className='btn_view_product'>
              View Product
              <img src={IconRightGreen} alt="" />
            </span>
        </div>


    </div>
  )
}
