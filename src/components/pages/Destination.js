import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'
import Header from '../layout/Header'

import DestinationTabs from '../tabs/destination/DestinationTabs'

import '../styles/tabs.css'

const Destination = ({ children }) => {
    return (
        <>
            <FullPageBgImage className='destination' />
            <Container>
                <Header>
                    <div className='number'>01</div>
                    <div className='title'>Pick Your Destination</div>
                </Header>

                <main>
                    <DestinationTabs className='tabs'>{children}</DestinationTabs>
                </main>
            </Container>
        </>
    )
}

export default Destination
