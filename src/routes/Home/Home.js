import React from "react"
import './Home.css'
import { NavLink } from 'react-router-dom'
import { saveAs } from "file-saver";
import CV from './../../assets/downloads/CV.pdf'
import profile from '../../assets/logo/profile-img.png'
import withLoading from "../../components/Loading/withLoading"
import { motion } from "framer-motion"

function Home() {

  const saveFile = () => {
    saveAs(
      CV,
      "Humberto-CV.pdf"
    );
  }

  return (    
    <section className="home--container">
      <div className="home--description">        
        <div className="home--hello-container">
            <motion.p
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 1], scale: [1, 1.5, 1] }} 
              transition={{ duration: 1 }}>
                Hello!
            </motion.p>            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 1, duration: 1 }}>
                I'm Humberto.
            </motion.p>
            <motion.p
              initial={{ x: -800 }}
              animate={{ x: [-800, 50, 0] }}
              transition={{ delay: 1.5, duration: 1 }}>
                Civil Engineer/Web Developer
            </motion.p>
        </div>
        <div className="home--buttons-container">        
          <NavLink 
            end to='/contact'>  
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
                transition={{ delay: 2.1, duration: 1 }}> 
                    Hire Me
              </motion.button>
          </NavLink>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
            transition={{ delay: 2.5, duration: 1 }}
            onClick={saveFile}>
              Download CV
          </motion.button>
        </div>
      </div>
      <motion.div 
        className="home--profile"
        initial={{ x: 850, scale: 2, rotate: 0 }}
        animate={{ x: [850, 0], scale: [2, 1], rotate: [0, 360] }}
        transition={{ duration: 1.5 }}>
          <img src={profile} alt="profile" />
      </motion.div>
    </section>
  )
}

export default withLoading(Home)