import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'

export const NavLinks = [
    {
        key: 'home',
        path: '/',
        name: 'Home',
        number: '00',
        component: Home,
        exact: true,
    },
    {
        key: 'destination',
        path: '/destination',
        name: 'Destination',
        number: '00',
        component: Destination,
        exact: true,
    },
    {
        key: 'crew',
        path: '/crew',
        name: 'Crew',
        number: '00',
        component: Crew,
        exact: true,
    },
    {
        key: 'technology',
        path: '/technology',
        name: 'Technology',
        number: '00',
        component: Technology,
        exact: true,
    },
]
