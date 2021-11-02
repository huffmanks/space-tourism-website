const CrewTabItem = ({ member, activeTab }) => {
    return (
        <div className={`tab-item ${activeTab === member.name ? 'show' : ''}`}>
            <div className='member-info'>
                <h3>{member.role}</h3>
                <h1>{member.name}</h1>
                <p>{member.bio}</p>
            </div>
        </div>
    )
}

export default CrewTabItem
