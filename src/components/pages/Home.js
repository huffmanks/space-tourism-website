import FullPageBgImage from '../layout/FullPageBgImage'
import Container from '../layout/Container'

import '../styles/home.css'

const Home = () => {
    return (
        <>
            <FullPageBgImage className='home' />
            <Container>
                <main>
                    <section>
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h1>SPACE</h1>
                        <p>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </section>
                    <section>
                        <div className='explore'>
                            <span>EXPLORE</span>
                        </div>
                    </section>
                </main>
            </Container>
        </>
    )
}

export default Home
