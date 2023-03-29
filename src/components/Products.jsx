import React from 'react'
import Main_title from './Main-title'
import Item_Product from './Item-Product'
import '../styles/Products.css'


export default function Products() {
  const description = 'Designed for indoor / outdoor wide area surface cleaning of warehouse and factory flooring, parking lot and sidewalk surfaces, asphalt, concrete and all natural stone hard surfaces.'
  return (
    <div id='products' className='main_products'>
       <Main_title bgtitle={'PRODUCTS'} title={'PRODUCT CATALOG'} />
       <p>Our product category provides a hassle-free experience with carefully curated products that just work. Our team of experts, with over a decade of industry experience, ensures that each product offers more benefits than troubles. We've included everything we wished we had known from the beginning, from easy-to-use design to our commitment to quality sustainability and efficient execution.
         Experience the difference with our simple and efficient products that exceed expectations. Choose us for a hassle-free solution!</p>
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />
       <Item_Product name={'HAAGA 477 Sweeper'} description={description} />




       

    
    </div>
  )
}
