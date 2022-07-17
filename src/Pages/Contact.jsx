import React from 'react'
import './Contact.css'

const contact = () => {
  return (
    <div className='contact-container'>
      <h3>CONTACT</h3>
      <div className="contact">
      <ul>
      <li>
        <div className="timeline-content">
          <h4>Get in touch</h4>
          <form>
            <input type="text" className='fullname' placeholder='Enter full name' />
            <input type="email" name="email" className='email' placeholder='Enter your email' />
            <textarea name="msg" className='message' cols="30" rows="5" placeholder='Please leave a message'></textarea>
          </form>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h4>Contact Info</h4>
          <p>Need to get in contact with me? Either fill out the form above with your enquiry or contact us with any of the medium below. I am always available to anser the question you might have. I look forward to hesring from you. </p>
          <div className="social-contact">
            <p>kingsley995mr@gmail.com</p>
            <p>(+234) - 08163792207</p>

          </div>
        </div>
      </li>
    </ul>
      </div>
    </div>
  )
}

export default contact