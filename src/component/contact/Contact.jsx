import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zubtnyp', 'template_fr27a1k', form.current, 'tKLQkD-Kjmj7IVIFm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vk1395631@gmail.com</h5>
            <a href="mailto:vk1395631@gmail.com" target='_blank'>Send a message</a>
          </artical>
          
          <artical className="contact__option">
            <BsWhatsapp className='contact__option-icon'  />
            <h4>Whatsapp</h4>
            <h5>8877885487</h5>
            <a href="https://api.whatsapp.com/send?phone+918877885487" target='_blank'>Send a message</a>
          </artical>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
