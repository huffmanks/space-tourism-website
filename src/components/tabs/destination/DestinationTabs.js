import { useState } from 'react'

import { Destinations } from '../../data/Data'

import DestinationTabImage from './_DestinationTabImage'
import DestinationTabItem from './_DestinationTabItem'

const DestinationTabs = () => {
    const [activeTab, setActiveTab] = useState('Moon')

    const handleActiveTab = (e) => {
        setActiveTab(e.target.textContent)
    }

    return (
        <>
            <section>
                {Destinations.map((destination) => (
                    <DestinationTabImage key={destination.name} activeTab={activeTab} destination={destination} />
                ))}
            </section>

            <section>
                <ul className='nav-tabs'>
                    {Destinations.map((destination) => (
                        <li key={destination.name} className={`nav-tab-item ${activeTab === destination.name ? 'active' : ''}`} onClick={handleActiveTab}>
                            {destination.name}
                        </li>
                    ))}
                </ul>
                {Destinations.map((destination) => (
                    <DestinationTabItem key={destination.name} activeTab={activeTab} destination={destination} />
                ))}
            </section>
        </>
    )
}

export default DestinationTabs
