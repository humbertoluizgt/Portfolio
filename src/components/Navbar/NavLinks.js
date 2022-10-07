import { NavLink } from 'react-router-dom'

const NavLinks = (props) => {

  const isDropdown = !props.isDropdown? 'navbar--link' : 'navbar--burger-link'

  return (
    <ul className='navbar--list-links'>
      <li className={isDropdown} onClick={props.handleDropdown}> 
        <NavLink 
          end to='/'          
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
            Home
        </NavLink>
      </li>
      <li className={isDropdown} onClick={props.handleDropdown}>
        <NavLink 
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
            About
        </NavLink>  
      </li>
      <li className={isDropdown} onClick={props.handleDropdown}>
        <NavLink 
          to='/portfolio'
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
            Portfolio
        </NavLink>  
      </li>
      <li className={isDropdown} onClick={props.handleDropdown}>
        <NavLink 
          to='/contact'
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
            Contact
        </NavLink>
      </li>      
    </ul>
  )
}

export default NavLinks