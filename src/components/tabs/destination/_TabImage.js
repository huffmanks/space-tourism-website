const TabImage = ({ destination, activeTab }) => {
    return (
        <div className={`tab-image ${activeTab === destination.name ? 'show' : ''}`}>
            <img src={destination.image} alt={destination.name} />
        </div>
    )
}

export default TabImage
