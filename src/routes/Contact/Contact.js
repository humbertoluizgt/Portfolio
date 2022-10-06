import React, { useRef } from 'react'
import './Contact.css'
import { motion } from "framer-motion"
import Map from '../../components/Map/Map'
import emailjs from '@emailjs/browser';
import withLoading from '../../components/Loading/withLoading';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2qru7y5', 'template_4ufqmtv', form.current, 'nOq53uQJBSeY1JJIl')
      .then((result) => {
        alert("Your message has been sent!");
      }, (error) => {
        alert("Something went wrong. Try again later");
      });
  };

  return (  
    <div className='contact--container'>
      <div className='contact--contact-area'>
      <motion.h1 
        className="contact--title"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1], scale: [0.5, 1.2, 1] }}
        transition={{ duration: 2 }}>
          Contact Me
      </motion.h1>      
        <form className='contact--form' ref={form} onSubmit={sendEmail}>
          <div className='contact--input-field'>
            <motion.label 
              htmlFor="name"
              initial={{ y: 200, opacity: 0 }} 
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}>
                Name
            </motion.label>
            <motion.input 
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 0.3 }}
              id='name' 
              name='name'
              value={form.name}
              type="text" 
              placeholder='Type your name..' 
              required/>
          </div>
          <div className='contact--input-field'>
            <motion.label 
              htmlFor="email"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 0.6 }}>
                Email
            </motion.label>
            <motion.input 
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 0.9 }}
              id='email' 
              name='email'
              value={form.email} 
              type="email" 
              placeholder='Type your email..' 
              required/>  
          </div> 
          <div className='contact--input-field'>
            <motion.label
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 1.2 }} 
              htmlFor="subject">
                Subject
            </motion.label>         
            <motion.input 
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 1.5 }}
              id='subject' 
              name='subject' 
              value={form.subject}
              type="text" 
              placeholder='Provide a subject..' 
              required/>  
          </div>
          <div className='contact--message-field'>
            <motion.label
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: [200, -10, 0], opacity: [0, 1] }}
              transition={{ delay: 1.8 }}  
              htmlFor="message">
                Message
            </motion.label>         
            <motion.textarea 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 2.1 }}              
              id="message" 
              name="message" 
              value={form.message}
              placeholder='Write your message here..' 
              required>                
            </motion.textarea>
          </div>
          <motion.button 
            className='contact--send-button'
            initial={{ y: 0, scale: 0 }}
            animate={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
            transition={{ delay: 2.4, duration: 1 }}>
              Send
          </motion.button>
        </form>
      </div>
      <motion.div 
        className='contact--map'
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{ delay: 2.6 }}>        
          <Map />
      </motion.div>
    </div>
  )
}

export default withLoading(Contact)