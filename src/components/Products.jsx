import React, { useState, useEffect, useMemo } from 'react'
import Main_title from './Main-title'
import Item_Product from './Product-Item'
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
      
      <Item_Product key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics}  gallery={swepper.gallery}/>
  
    )

    return items

  },[sweepers])

  const ShowFloorwash = useMemo(() => {
    
    let items = floorwash?.map((swepper) => 
      
      <Item_Product key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics}  gallery={swepper.gallery}/>
  
    )

    return items

  },[floorwash])

  const ShowFloordryer = useMemo(() => {
    
    let items = floordryer?.map((swepper) => 
      
      <Item_Product key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics} gallery={swepper.gallery} />
  
    )

    return items

  },[floordryer])

  //const ShowScrubbers = useMemo(() => {
    
    //let items = scrubbers?.map((swepper) => 
      
      //<Item_Product key={swepper.id} model={swepper.model} description={swepper.description} characteristics={swepper.characteristics} gallery={swepper.gallery} />
  
    //)

    //return items

  //},[scrubbers])

  

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
      <p className='main-text'>Discover Excellence in Every Product. Our handpicked catalog showcases a range of sweepers, cleaners, and scrubbers, each handpicked for its superior performance and eco-conscious build. We've included everything we wished we had known from the beginning, from easy-to-use design to our commitment to quality sustainability and efficient execution. Dive into our selections from leading brands Haaga and Namco—where innovation meets the art of cleanliness.</p>
      
      
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

      {/*<div className='products__items-box'>
            <h1 className='product__type'>scrubbers</h1>
            {ShowScrubbers}
      </div> */}


    </div>
  )
}
