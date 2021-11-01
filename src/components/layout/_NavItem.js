import { NavLink } from 'react-router-dom'

const NavItem = ({ navLink, setOpen }) => {
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <>
            <li className='nav-item'>
                <NavLink exact to={navLink.path} activeClassName='active' className='nav-link' onClick={closeMenu}>
                    <span className='link-number'>{navLink.number}</span>
                    <span className='link-name'>{navLink.name}</span>
                </NavLink>
            </li>
        </>
    )
}

export default NavItem
