import React from 'react'
import Main_title from './Main-title'
import Service_Card from './Service-Card'
import Feature_Item from './Feature-Item'
import Service_1 from '../assets/Service1.svg'
import Service_2 from '../assets/Service2.svg'
import Service_3 from '../assets/Service3.svg'
import Service_4 from '../assets/Service4.svg'
import imgF1 from '../assets/ImgF1.svg'
import imgF2 from '../assets/ImgF2.svg'
import imgF3 from '../assets/ImgF3.svg'
import imgF4 from '../assets/ImgF4.svg'


export default function () {
  return (
    <div className='main_features'>
       <Main_title bgtitle={'FEATURES'} title={'Attributes and Qualities'} />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.
         Etiam ultricies lacus imperdiet eleifend congue. Pellentesque sed felis eget risus mollis suscipit. </p>
       
       <div className='service_container'>
            <Service_Card icon={Service_1} title={'Feature One'} />
            <Service_Card icon={Service_2} title={'Feature Two'} />
            <Service_Card icon={Service_3} title={'Feature Three'} />
            <Service_Card icon={Service_4} title={'Feature Four'} />
       </div>

       <div className='fetures_items_container'>
        <Feature_Item img={imgF1} title={'Feature One'} />
        <Feature_Item img={imgF2} title={'Feature Two'} />
        <Feature_Item img={imgF3} title={'Feature Three'} />
        <Feature_Item img={imgF4} title={'Feature Four'} />
       </div>
    </div>
  )
}
