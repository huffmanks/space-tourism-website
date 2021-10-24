import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'
import Header from '../layout/Header'

const NotFound = () => {
    return (
        <>
            <FullPageBgImage className='home' />
            <Container>
                <Header>404! Page Not Found</Header>
            </Container>
        </>
    )
}

export default NotFound
