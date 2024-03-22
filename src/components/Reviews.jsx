import React from 'react'
import Main_title from './Main-title'
import Card_Review from './Card-Review'
import Icon_User_1 from '../assets/User_1.svg'
import Icon_User_2 from '../assets/User_2.svg'
import Icon_User_3 from '../assets/User_3.svg'
import '../styles/review.css'

export default function Reviews() {
 
  
  const user_1 = {
    img: Icon_User_1, 
    name:'Minerva Doyle', 
    position: 'CEO Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.',
    rating_number: 5
  }
  const user_2 = {
    img: Icon_User_2, 
    name:'Jason Alexander', 
    position: 'CEO Company',
    comment: 'Lorem t. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.',
    rating_number: 5
  }
  const user_3 = {
    img: Icon_User_3, 
    name:'Myrtle Ortega', 
    position: 'CEO Company',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.',
    rating_number: 5
  }
  
  return (
    <div className='main_reviews'>
        <Main_title bgtitle={'REVIEWS'} title={'Customer reviews about our products'} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien efficitur, sagittis enim ut, pulvinar velit. Phasellus luctus ultricies accumsan. Integer aliquet fringilla lectus quis dapibus.
         Etiam ultricies lacus imperdiet eleifend congue. Pellentesque sed felis eget risus mollis suscipit. </p>

        <div className='cards_container'>
          <Card_Review user={user_1} /> 
          <Card_Review user={user_2} /> 
          <Card_Review user={user_3} /> 
   
          
         
        </div>
    </div>
  )
}
