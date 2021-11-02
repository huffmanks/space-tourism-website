const CrewTabImage = ({ member, activeTab }) => {
    return (
        <div className={`tab-image ${activeTab === member.name ? 'show' : ''}`}>
            <img src={member.image} alt={member.name} />
        </div>
    )
}

export default CrewTabImage
