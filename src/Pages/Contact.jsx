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
          <h3 className="date">20th may, 2010</h3>
          <h1>Heading 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">20th may, 2010</h3>
          <h1>Heading 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.</p>
        </div>
      </li>
    </ul>
      </div>
    </div>
  )
}

export default contact