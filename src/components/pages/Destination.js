import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'
import Header from '../layout/Header'

import Tabs from '../tabs/destination/Tabs'

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
                    <Tabs className='tabs'>{children}</Tabs>
                </main>
            </Container>
        </>
    )
}

export default Destination
