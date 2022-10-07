import React from 'react'
import './Portfolio.css'
import { projects } from '../../data/projects'
import withLoading from "../../components/Loading/withLoading"
import { motion } from "framer-motion"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillChrome } from 'react-icons/ai';
import { nanoid } from 'nanoid'

function Portfolio() {
  return (
    <section className="portfolio--container">
     <motion.h1 
        className="portfolio--title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1], scale: [0.5, 1.3, 1] }}
        transition={{ duration: 2 }}>
          My Portfolio
      </motion.h1>
      <div  className='portfolio--cards-container'>
        {projects.map( project => {
          return (
            <>
              <motion.article 
                key={ nanoid() }
                className='portfolio--card'                
                initial={ project.initial }
                animate={ project.animate }
                transition={ project.transition }
              >
                  <div className='portfolio--img-container'>
                    <img src={ project.img } alt={ project.name }></img>
                  </div>
                  <h1>{ project.name }</h1>
                  <div className='portfolio--icons-container'>
                    <a href={ project.gitLink } target='_blank' rel='noreferrer'>
                      <AiFillGithub className='portfolio--icon' />
                    </a>    
                    <a href={ project.webLink } target='_blank' rel='noreferrer'>           
                      <AiFillChrome className='portfolio--icon' />
                    </a>     
                  </div>   
              </motion.article>
            </>
          )
        } )}
      </div>
    </section>
  )
}

export default withLoading(Portfolio)
