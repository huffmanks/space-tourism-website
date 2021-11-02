import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'
import Header from '../layout/Header'

import TechTabs from '../tabs/technology/TechTabs'

import '../styles/tabs.css'

const Technology = ({ children }) => {
    return (
        <>
            <FullPageBgImage className='technology' />
            <Container>
                <Header>
                    <div className='number'>03</div>
                    <div className='title'>Space Launch 101</div>
                </Header>

                <main className='main-technology'>
                    <TechTabs className='tabs'>{children}</TechTabs>
                </main>
            </Container>
        </>
    )
}

export default Technology
