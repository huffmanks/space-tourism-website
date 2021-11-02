const TechTabImage = ({ equipment, activeTab }) => {
    console.log(window.innerWidth)
    return (
        <div className={`tab-image ${activeTab === equipment.number ? 'show' : ''}`}>
            <img src={window.innerWidth > 950 ? equipment.images.portrait : equipment.images.landscape} alt={equipment.name} />
        </div>
    )
}

export default TechTabImage
