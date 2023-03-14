import React from 'react'
import Main_title from './Main-title'
import Item_Product from './Item-Product'
import '../styles/Products.css'


export default function Products() {
  const description = 'Designed for indoor / outdoor wide area surface cleaning of warehouse and factory flooring, parking lot and sidewalk surfaces, asphalt, concrete and all natural stone hard surfaces.'
  return (
    <div id='products' className='main_products'>
       <Main_title bgtitle={'PRODUCTS'} title={'Lorem ipsum dolor sit amet, consectetur.'} />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.
         Etiam ultricies lacus imperdiet eleifend congue. Pellentesque sed felis eget risus mollis suscipit. </p>
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />




       

    
    </div>
  )
}
