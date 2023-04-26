import React from 'react'
import Main_title from './Main-title'
import Product_Item from './Product-Item'
import '../styles/Products.css'


export default function Products() {
  const description = 'Designed for indoor / outdoor wide area surface cleaning of warehouse and factory flooring, parking lot and sidewalk surfaces, asphalt, concrete and all natural stone hard surfaces.'
  /**
   * products
   *  products__box
   *    product__type
   *    
   * 
   * **/
  return (
    <div id='products' className='products'>
      <Main_title bgtitle={'PRODUCTS'} title={'PRODUCT CATALOG'} letter_spacing={'secondary'} />
      <p className='main-text'>Our product category provides a hassle-free experience with carefully curated products that just work. Our team of experts, with over a decade of industry experience, ensures that each product offers more benefits than troubles. We've included everything we wished we had known from the beginning, from easy-to-use design to our commitment to quality sustainability and efficient execution.
        Experience the difference with our simple and efficient products that exceed expectations. Choose us for a hassle-free solution!</p>
      
      
      <div className='products__items-box'>
        <h1 className='product__type '>SWEEPERS</h1>
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />
      </div>

      <div className='products__items-box'>
        <h1 className='product__type '>DRYERS</h1>
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />

      </div>

      <div className='products__items-box'>
        <h1 className='product__type '>CLEANERS</h1>
        <Product_Item name={'HAAGA 477 Sweeper'} description={description} />
      </div>
     




       

    
    </div>
  )
}
