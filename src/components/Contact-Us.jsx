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
                    <label htmlFor="" className='form_label'>First Name</label>
                    <input className='form_input' type="text" placeholder='Jhon'/>
                </div>
                <div className='form_input_container'>
                    <label htmlFor="" className='form_label'>Last Name</label>
                    <input className='form_input' type="text" placeholder='Doe'/>
                </div>
            </div>

            <div className="form_row">
                <div className='form_input_container'>
                    <label htmlFor="" className='form_label'>Phone Number</label>
                    <input className='form_input' type="text" placeholder='555 555 5555'/>
                </div>
                <div className='form_input_container'>
                    <label htmlFor="" className='form_label'>Email</label>
                    <input className='form_input' type="email" placeholder='customer@email.com'/>
                </div>
            </div>

            
            <div className='form_input_container'>
                <label htmlFor="" className='form_label'>How can we help?</label>
                <textarea className='form_textarea' placeholder="Hello, I am interested in purchasing some products from your innovative cleaning catalog. Specifically, I am looking for a high-quality mop that is easy to use and durable. Can you recommend any products in your catalog that fit this description? Also, do you offer any discounts for bulk purchases? Thank you.">
                </textarea>
            </div>


            <div className='form_action_container'>
                <button className='form_btn btn_cancel'>cancel</button>
                <button className='form_btn btn_sumbit'>sumbit</button>
            </div>

        </form>
    </div>
  )
}
