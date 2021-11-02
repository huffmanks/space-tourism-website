import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'
import Header from '../layout/Header'

import CrewTabs from '../tabs/crew/CrewTabs'

import '../styles/tabs.css'

const Crew = ({ children }) => {
    return (
        <>
            <FullPageBgImage className='crew' />
            <Container>
                <Header>
                    <div className='number'>02</div>
                    <div className='title'>Meet Your Crew</div>
                </Header>

                <main className='main-crew'>
                    <CrewTabs className='tabs'>{children}</CrewTabs>
                </main>
            </Container>
        </>
    )
}

export default Crew
