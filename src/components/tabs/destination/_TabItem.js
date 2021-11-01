const TabItem = ({ destination, activeTab }) => {
    return (
        <div className={`tab-item ${activeTab === destination.name ? 'show' : ''}`}>
            <div className='destination-info'>
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
                <hr />
                <div className='destination-facts'>
                    <div className='distance'>
                        <div className='title'>AVG. DISTANCE</div>
                        <div className='number'>{destination.distance}</div>
                    </div>
                    <div className='travel'>
                        <div className='title'>EST. TRAVEL TIME</div>
                        <div className='number'>{destination.travel}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabItem
