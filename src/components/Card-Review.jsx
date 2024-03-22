import React from 'react'
import Star_Icon from '../assets/Star.svg'
import '../styles/card-review.css'

export default function Card_Review({user}) {
  const comment = user.comment
  const array_rating_number = Array.from({length: user.rating_number}, (v, i)  => i)
  const rating_number = user.rating_number
  const name = user.name
  const position = user.position
  const img = user.img
  return (
    <div className='main_card_review'>
        <p className='comment'>{comment}</p>

        <div className='rating_contianer'>
          <div className='stars_icons_container'>
          {
            array_rating_number?.map((number, id) => 
                    
              <img src={Star_Icon} alt="" key={id} />
                  
            )
          }
          </div>
            <span className='rating_number'>{rating_number}</span>
        </div>

        <div className='user_profile_container'>
          <span className='user_img_container'><img src={img} alt="" /></span>
          <span className='user_info_container'>{name} <span>{position}</span></span>
        </div>

        
    </div>
  )
}
