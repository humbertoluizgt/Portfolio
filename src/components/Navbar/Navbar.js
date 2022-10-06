import React, { useState } from 'react'
import './Navbar.css'
import NavLinks from './NavLinks'
import HambIcon from '../../assets/svg/Hamburger_icon.svg'
import logo from '../../assets/logo/logo.png'

export default function Navbar() {

  const [isDropdown, setIsDropdown] = useState(false)

  const handleDropdown = () => {
    setIsDropdown( prevState => !prevState )
  }

  return (
    <nav>
      <div className='navbar--logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar--links-container'>
        <NavLinks />
        <div className='navbar--hamburger-icon'>
          <img
            src={HambIcon} 
            alt="menu"
            onClick={() => handleDropdown()}
          />
        </div>
       
        {isDropdown && 
        <div className='navbar--hamburger-container'>
          <NavLinks isDropdown={isDropdown} handleDropdown={() => handleDropdown()} />
        </div>}
      </div> 
    </nav>
  )
}
