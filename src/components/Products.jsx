import React, { useState, useEffect, useMemo } from 'react'
import Main_title from './Main-title'
import Product_Item from './Product-Item'
import '../styles/Products.css'


export default function Products() {
  const [sweepers, setSweepers]  = useState([])
  const [floorwash, setFloorwash]  = useState([])
  const [floordryer, setFloordryer]  = useState([])
  const [scrubbers, setScrubbers]  = useState([])
  useEffect(() => {
    fetch('json/products.json')
    .then(response => response.json())
    .then(datos => {
      setSweepers(datos.sweepers)
      setFloorwash(datos.floorwash)
      setFloordryer(datos.floor_dryer)
      setScrubbers(datos.scrubbers)
    })
  }, [])

    
  const ShowSweppers = useMemo(() => {
    
    let items = sweepers?.map((swepper) => 
      
      <Product_Item key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics}  gallery={swepper.gallery}/>
  
    )

    return items

  },[sweepers])

  const ShowFloorwash = useMemo(() => {
    
    let items = floorwash?.map((swepper) => 
      
      <Product_Item key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics}  gallery={swepper.gallery}/>
  
    )

    return items

  },[floorwash])

  const ShowFloordryer = useMemo(() => {
    
    let items = floordryer?.map((swepper) => 
      
      <Product_Item key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics} gallery={swepper.gallery} />
  
    )

    return items

  },[floordryer])

  const ShowScrubbers = useMemo(() => {
    
    let items = scrubbers?.map((swepper) => 
      
      <Product_Item key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics} gallery={swepper.gallery} />
  
    )

    return items

  },[scrubbers])

  

  /**
   * products
   *  products__box
   *    product__type
   *    
   * 
   * **/
  
  return (
    <div id='products' className='products'>
      <Main_title bgtitle={'PRODUCTS'} title={'PRODUCT CATALOG'} letter_spacing={'secondary'} font_size={'normal'} />
      <p className='main-text'>Our product category provides a hassle-free experience with carefully curated products that just work. Our team of experts, with over a decade of industry experience, ensures that each product offers more benefits than troubles. We've included everything we wished we had known from the beginning, from easy-to-use design to our commitment to quality sustainability and efficient execution.
        Experience the difference with our simple and efficient products that exceed expectations. Choose us for a hassle-free solution!</p>
      
      
      <div className='products__items-box'>
        <h1 className='product__type'>sweepers</h1>
        {ShowSweppers}
      </div>

      
      <div className='products__items-box'>
        <h1 className='product__type'>floorwash</h1>
        {ShowFloorwash}
      </div>

      <div className='products__items-box'>
        <h1 className='product__type'>floor dryer</h1>
        {ShowFloordryer}
      </div>

      <div className='products__items-box'>
        <h1 className='product__type'>scrubbers</h1>
        {ShowScrubbers}
      </div>


    </div>
  )
}
