import { useState } from 'react'

import { Destinations } from '../../data/Data'

import TabImage from './_TabImage'
import TabItem from './_TabItem'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Moon')

    const handleActiveTab = (e) => {
        setActiveTab(e.target.textContent)
    }

    return (
        <>
            <section>
                {Destinations.map((destination) => (
                    <TabImage key={destination.name} activeTab={activeTab} destination={destination} />
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
                    <TabItem key={destination.name} activeTab={activeTab} destination={destination} />
                ))}
            </section>
        </>
    )
}

export default Tabs
