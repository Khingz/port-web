import React from 'react'
import './Contact.css'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Footer from '../component/Footer'
import { motion } from 'framer-motion'

const contact = () => {
  return (
    <motion.div className='contact-container'  initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 0.8}}>
      <h2>MY CONTACT</h2>
      <div className="contact">
      <ul>
      <li>
        <div className="timeline-content">
          <h4>Get in touch</h4>
          <form name="contact" action="Pages/success/" method="POST" data-netlify="true" >
            <input type="text" className='fullname' placeholder='Enter full name' />
            <input type="email" name="email" className='email' placeholder='Enter your email' />
            <textarea name="msg" className='message' cols="30" rows="5" placeholder='Please leave a message'></textarea>
            <input type="submit" value="Submit" className='submit-btn' />
          </form>
        </div>
      </li>
      <li>
        <div className="timeline-content" >
          <h4>Contact Info</h4>
          <p>Need to get in contact with me? Either fill out the form above with your enquiry or contact us with any of the medium below. I am always available to answer the question you might have. I look forward to hearing from you. </p>
          <div className="social-contact">
            <div>
            <p><span><FaEnvelope /></span>kingsley995mr@gmail.com</p>
            </div>
           <div>
           <p><span><FaPhoneAlt /></span>(+234)-08163792207</p>
           </div>
           <div>
           <p><span><FaWhatsapp /></span>(+234)-08163792207</p>
           </div>
          </div>
        </div>
      </li>
    </ul>
      </div>
      <Footer />
    </motion.div>
  )
}

export default contact