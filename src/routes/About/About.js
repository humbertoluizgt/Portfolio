import React from 'react'
import './About.css'
import withLoading from '../../components/Loading/withLoading'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import parse, { domToReact } from "html-react-parser";

function About() {

  const initial = { y: 500, opacity: 0 }
  const animate = { y: [500, -20, 0], opacity: [0, 1] }
  const duration = { duration: 1 }
  const aboutParagraph = [ 
    { id: 1, text: "Hi there, my name is Humberto and in the last 10 years I have been working as a civil engineer. I joined a few companies during this time and worked in different positions/roles. Currently, I am working for Hunnebeck Ltd. A company that provides equipment's for the construction industry." }, 
    { id: 2, text: "I can affirm that it has been an amazing journey so far and I have achieved great results in my career along this time." }, 
    { id: 3, text: "In parallel to that, web development/coding in general has been my Hobby for so many years. I have been involved with coding since when I was young having the privilege of learning HTML and Javascript in their first released versions." }, 
    { id: 4, text: "I can work with: HTML, CSS, Javascript including some of their frameworks/libraries such as React JS and SASS." }, 
    { id: 5, text: "Talking a little about me, I like to practice sports, enjoy traveling abroad to meet new places and people." }, 
    { id: 6, text: "Playing piano and studying new tecnologies are some of the common activities I do on my spare time." }, 
    { id: 7, text: "There are a lot more about me of course. Therefore, if you want to know more or get in touch for any other reason, please contact me <a href='/contact'>Here</a> and I will be more than happy in chatting with you." }, 
    { id: 8, text: "Finally, I would like to say that I am open for any job/career oportunity to start as a front end Developer, so if you think I could fit in your team/project let me know by leaving me a message through the <a href='/contact'>Contact</a> page." }
  ]

  function parseWithLinks(text) {
    const options = {
      replace: ({ name, attribs, children }) => {
        if (name === "a" && attribs.href) {
          return <Link to={attribs.href} style={{textDecoration: "underline"}}>{domToReact(children)}</Link>;
        }
      }
    };

    return parse(text, options);
  }

  return (
    <section className="about--container">
      <motion.h1 
        className="about--title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1], scale: [0.5, 1.5, 1] }}
        transition={{ duration: 2 }}>
          About Me
      </motion.h1>

      <div className='about--paragraph'>
        { aboutParagraph.map( paragraph => {
          return (
            <motion.p 
              key={ paragraph.id }
              initial={ initial }
              animate={ animate }
              transition={ { ...duration, delay: paragraph.id - 1.3 } }>
                <span style={ { marginLeft: "2rem" } }></span>{ parseWithLinks(paragraph.text) }<br/><br/> 
            </motion.p>
          )  
        } ) }      
      </div>
    </section>
  )
}

export default withLoading(About)