import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useRef } from 'react'

const Navbar = ({ open, setOpen }) => {

  const navref = useRef()
  useEffect(() => {
    const closeMenu = e => {
      if (navref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }

  }, [setOpen])

  const styleNavLink = ({ isActive }) => {
    return {
      backgroundColor: isActive
        ? 'rgba(146, 96, 31, 0.408)'
        : 'rgb(146, 96, 31)'
    }
  }
  
  return (
    <nav className={`${open && 'open'}`} ref={navref}>
      <NavLink
        to={'/'}
        style={styleNavLink}
      >
        Home
      </NavLink>
      <NavLink
        to={'/about'}
        style={styleNavLink}
      >
        About
      </NavLink>
      <NavLink
        to={'/projects'}
        style={styleNavLink}
      >
        Projects
      </NavLink>
      <NavLink
        to={'/contact'}
        style={styleNavLink}
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Navbar
