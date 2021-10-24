import { NavLinks } from '../routes/Routes'

import NavItem from './_NavItem'

import logoImage from '../../assets/shared/logo.svg'
import iconHamburger from '../../assets/shared/icon-hamburger.svg'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <img className='nav-logo' src={logoImage} alt='Space logo' />
            </div>
            <div className='nav-menu'>
                <img src={iconHamburger} alt='Mobile menu' />
            </div>
            <div className='navbar-nav'>
                <ul className='nav-links'>
                    {NavLinks.map((navLinkProps) => (
                        <NavItem {...navLinkProps} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
