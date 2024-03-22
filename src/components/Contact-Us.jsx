import React,{useRef} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact-us.css'
import UserIcon from '../assets/user.svg'
import EmailIcon from '../assets/icon-email.svg'
import PhoneIcon from '../assets/icon-phone.svg'
import MsgIcon from '../assets/icon-msg.svg'
import Main_title from './Main-title'
export default function Contact_Us() {
  const [state, handleSubmit] = useForm("xgebdnwy");
  const form_contact = useRef()
  if (state.succeeded) {
    form_contact.current.reset()
    
  }
  return (
    <div className='contact-us' id='contact'>
      <Main_title bgtitle={'IN TOUCH'} title={'Get It Touch Now'} letter_spacing={'primary'} font_size={'normal'} />
        <p className='main-text'>
          Ready to elevate your cleaning game? Let's connect. Sign up and we'll guide you through the future of sustainable, industrial-grade cleaning solutions. Step into a cleaner, greener tomorrow with Highgreen Technology.
          <br />
          <br />
          * In order to better assist you, please provide us with as much information as possible about your inquiry. This will help us to provide you with a prompt and accurate response. We appreciate your interest in our products/services and look forward to hearing from you!
        </p>

        <form onSubmit={handleSubmit} className='form' ref={form_contact}>
            <div className="form__row">
                <div className="form__group">
                    
                    <input type="text" className="form__input" id="name" name="first_name" placeholder="First Name" />
                    <label htmlFor="name" className="form__label">First Name</label>
                    <img src={UserIcon} alt="User icon" className='form__icon'/>
                </div>

                
                <div className="form__group">
                    
                    <input type="email" className="form__input" id="email" name="email" placeholder="Email Address" required/>
                    <label htmlFor="email" className="form__label">Email Address</label>
                    <img src={EmailIcon} alt="User icon" className='form__icon'/>
                </div>
            </div>
           
            <div className="form__row">
                <div className="form__group">
                  
                  <input type="text" className="form__input" id="phone" name="phone" placeholder="(956) 123 4567" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                  <label htmlFor="phone" className="form__label">Phone Number</label>
                  <img src={PhoneIcon} alt="User icon" className='form__icon'/>
                </div>
                
                <div className="form__group">
                    
                    <input type="text" className="form__input" id="last_name" name="last_name" placeholder="Bussiness Name" required/>
                    <label htmlFor="last_name" className="form__label">Company</label>
                    <img src={UserIcon} alt="User icon" className='form__icon'/>
                </div>

                
            </div>

            <div className="form__row">
              <div className="form__group ">
                <input type="text" className="form__input form__input--msg-desktop" name="message" id="message" placeholder="Your Message" required/>
                <label htmlFor="message" className="form__label">Your Message</label>
                <textarea className='form__textarea form__textarea--msg' name="message" id="message" placeholder="Your Message" required></textarea>
              
                <img src={MsgIcon} alt="User icon" className='form__icon'/>
              </div>
            </div>

            <button type='submit' className='btn btn--submit' disabled={state.submitting}>Send</button>
        </form>
      
    </div>
  )
}
