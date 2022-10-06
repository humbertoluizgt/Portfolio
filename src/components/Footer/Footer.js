import React from 'react'
import './Footer.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <section className='footer--container'>
      <p>All rights reserved 	&copy;</p>
      <p>Manchester-UK</p>
      <a href="https://github.com/humbertoluizgt" target='_blank' rel='noreferrer'><AiFillGithub className='footer--icon' /></a>
      <a href="https://www.linkedin.com/in/humberto-luiz-tangari-233157109/" target='_blank' rel='noreferrer'><AiFillLinkedin className='footer--icon' /></a>      
    </section>
  )
}