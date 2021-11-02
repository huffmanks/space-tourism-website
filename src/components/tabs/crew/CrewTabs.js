import { useState } from 'react'

import { Crew } from '../../data/Data'

import CrewTabImage from './_CrewTabImage'
import CrewTabItem from './_CrewTabItem'

const CrewTabs = () => {
    const [activeTab, setActiveTab] = useState('Douglas Hurley')

    const handleActiveTab = (e) => {
        setActiveTab(e.target.textContent)
    }

    return (
        <>
            <section className='crew-info'>
                {Crew.map((member) => (
                    <CrewTabItem key={member.name} activeTab={activeTab} member={member} />
                ))}
                <ul className='nav-tabs'>
                    {Crew.map((member) => (
                        <li key={member.name} className={`nav-crew-tab-item ${activeTab === member.name ? 'active' : ''}`} onClick={handleActiveTab}>
                            <div className='sr-only'>{member.name}</div>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                {Crew.map((member) => (
                    <CrewTabImage key={member.name} activeTab={activeTab} member={member} />
                ))}
            </section>
        </>
    )
}

export default CrewTabs
