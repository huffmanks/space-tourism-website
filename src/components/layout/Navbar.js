import { useState } from 'react'
import { NavLinks } from '../routes/Routes'

import NavItem from './_NavItem'

import logoImage from '../../assets/shared/logo.svg'
import iconHamburger from '../../assets/shared/icon-hamburger.svg'
import iconClose from '../../assets/shared/icon-close.svg'
import '../styles/navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <img className='nav-logo' src={logoImage} alt='Space logo' />
            </div>
            <div className='nav-menu' onClick={toggleMenu} open={open}>
                {open ? <img src={iconClose} className='icon-close' alt='Close menu' /> : <img src={iconHamburger} alt='Mobile menu' />}
            </div>
            <div className={`navbar-nav ${open ? 'show' : 'hide'}`} open={open}>
                <ul className='nav-links'>
                    {NavLinks.map((navLink) => (
                        <NavItem key={navLink.key} navLink={navLink} setOpen={setOpen} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
