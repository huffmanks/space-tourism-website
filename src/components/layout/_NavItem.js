import { NavLink } from 'react-router-dom'

const NavItem = (navLinkProps) => {
    return (
        <>
            <li className='nav-item'>
                <NavLink exact to={navLinkProps.path} activeClassName='active' className='nav-link'>
                    <span className='link-number'>{navLinkProps.number}</span>
                    <span className='link-name'>{navLinkProps.name}</span>
                </NavLink>
            </li>
        </>
    )
}

export default NavItem
