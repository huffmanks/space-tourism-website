import { useState } from 'react'

import { Technology } from '../../data/Data'

import TechTabImage from './_TechTabImage'
import TechTabItem from './_TechTabItem'

const TechTabs = () => {
    const [activeTab, setActiveTab] = useState('1')

    const handleActiveTab = (e) => {
        setActiveTab(e.target.textContent)
    }

    return (
        <>
            <section className='tech-info'>
                <ul className='nav-tabs nav-tech-tabs'>
                    {Technology.map((equipment) => (
                        <li key={equipment.name} className={`nav-tech-tab-item ${activeTab === equipment.number ? 'active' : ''}`} onClick={handleActiveTab}>
                            {equipment.number}
                        </li>
                    ))}
                </ul>
                {Technology.map((equipment) => (
                    <TechTabItem key={equipment.name} activeTab={activeTab} equipment={equipment} />
                ))}
            </section>
            <section className='tech-image'>
                {Technology.map((equipment) => (
                    <TechTabImage key={equipment.name} activeTab={activeTab} equipment={equipment} />
                ))}
            </section>
        </>
    )
}

export default TechTabs
