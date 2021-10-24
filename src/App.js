import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import { NavLinks } from './components/routes/Routes'
import NotFound from './components/pages/NotFound'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                {NavLinks.map((navLinkProps) => (
                    <Route {...navLinkProps} />
                ))}
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App
