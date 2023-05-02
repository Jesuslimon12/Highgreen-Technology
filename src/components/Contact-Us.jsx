import React from 'react'
import '../styles/Contact-Us.css'
import UserIcon from '../assets/user.svg'
import EmailIcon from '../assets/icon-email.svg'
import PhoneIcon from '../assets/icon-phone.svg'
import MsgIcon from '../assets/icon-msg.svg'
import Main_title from './Main-title'
export default function Contact_Us() {
  return (
    <div className='contact-us'>
      <Main_title bgtitle={'IN TOUCH'} title={'Get It Touch Now'} letter_spacing={'primary'} />
      <p className='main-text'>In order to better assist you, please provide us with as much information as possible about your inquiry. This will help us to provide you with a prompt and accurate response. We appreciate your interest in our products/services and look forward to hearing from you! </p>

    
        <form action="#" className='form'>
            <div className="form__row">
                <div className="form__group">
                    
                    <input type="text" className="form__input" id="name" placeholder="First Name" />
                    <label htmlFor="name" className="form__label">First Name</label>
                    <img src={UserIcon} alt="User icon" className='form__icon'/>
                </div>

                <div className="form__group">
                  
                    <input type="text" className="form__input" id="last_name" placeholder="Last Name" />
                    <label htmlFor="last_name" className="form__label">Last Name</label>
                    <img src={UserIcon} alt="User icon" className='form__icon'/>
                </div>
            </div>
           
            <div className="form__row">
                <div className="form__group">
                    
                    <input type="email" className="form__input" id="email" placeholder="Email Address" />
                    <label htmlFor="email" className="form__label">Email Address</label>
                    <img src={EmailIcon} alt="User icon" className='form__icon'/>
                </div>

                <div className="form__group">
                  
                    <input type="text" className="form__input" id="phone" placeholder="Phone Number" />
                    <label htmlFor="phone" className="form__label">Phone Number</label>
                    <img src={PhoneIcon} alt="User icon" className='form__icon'/>
                </div>
            </div>

            <div className="form__row">
              <div className="form__group ">
                <input type="text" className="form__input form__input--msg" id="message" placeholder="Your Message" />
                <label htmlFor="message" className="form__label">Your Message</label>
                <img src={MsgIcon} alt="User icon" className='form__icon'/>
              </div>
            </div>

            <a href='#' type='submit' className='btn btn--primary'>Send</a>
        </form>
      
    </div>
  )
}
