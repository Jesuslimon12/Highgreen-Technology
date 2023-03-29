import React from 'react'
import '../styles/Contact-Us.css'
export default function Contact_Us() {
  return (
    <div className='main_contact_us'>
        <h1 className='main_title'>
           <span className='highlighted_text'> contact us  </span>
            For sales, questions or technical support.
        </h1>

        <form className='form_contact_us' action="">
            <div className="form_row">
                <div className='form_input_container'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Jhon'/>
                </div>
                <div className='form_input_container'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Doe'/>
                </div>
            </div>

            <div className="form_row">
                <div className='form_input_container'>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='555 555 5555'/>
                </div>
                <div className='form_input_container'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='customer@email.com'/>
                </div>
            </div>

            
            <div className='form_input_container'>
                <label htmlFor="">How can we help?</label>
                <textarea placeholder="Hello, I am interested in purchasing some products from your innovative cleaning catalog. Specifically, I am looking for a high-quality mop that is easy to use and durable. Can you recommend any products in your catalog that fit this description? Also, do you offer any discounts for bulk purchases? Thank you.">
                  
                </textarea>
            </div>
            

        </form>
    </div>
  )
}
