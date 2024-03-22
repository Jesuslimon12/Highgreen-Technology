import React, { useEffect, useLayoutEffect } from 'react'
import { useState, useMemo, useRef} from "react"
import Carousel from './Carousel'
import IconRightGreen from '../assets/RightIconGreen.svg'
import '../styles/product-item.css'

export default function Item_Product(props) {

  const model = props.model
  const description = props.description
  const characteristics = props.characteristics
  const gallery_name = props.gallery


  const ShowCharacteritics = useMemo(() => {
    
    let items = characteristics?.map((item, id) => 
      <span className='product__characteristic' key={id}>{item.characteristic} <span className='text--black'> {item.description} </span> </span>
    )

    return items

  },[props.characteristics]) 
  


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
        
        <Carousel gallery_name={gallery_name} />
        

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
