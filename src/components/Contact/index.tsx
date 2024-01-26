import React from 'react'
import './Contact.css'
import { ContactHeroIcon, FaceBook, Location } from '../../assets/svg/svg'
import { ContactInfo } from '../../constants'
import contactImage from '../../assets/images/contact-image.png'

const Contact = () => {
  return (
    <section id='Contact' className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-content'>
          <div className='contact-title'><span>Contact</span> information</div>
          <div className='contact-description'>Feel free to use any of these channels to get in touch. I'm excited to connect with you!</div>

          <div className='contact-info-main'>
            {ContactInfo.map((info) => {
              return (
                <div className='contact-info-contaier'>
                  <div>{info.svg}</div>
                  <div>
                    <div className='info-title'>{info.title}</div>
                    <div className='info-description'>{info.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='contact-image'>
            <img src={contactImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact