const TechTabItem = ({ equipment, activeTab }) => {
    return (
        <div className={`tab-item ${activeTab === equipment.number ? 'show' : ''}`}>
            <div className='equipment-info'>
                <h3>THE TERMINOLOGY...</h3>
                <h1>{equipment.name}</h1>
                <p>{equipment.description}</p>
            </div>
        </div>
    )
}

export default TechTabItem
