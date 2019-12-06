import React from 'react'

import './DetailsCours.css'

function FilterBar() {
    return (
        <div className='filterBar'>
            <div className='langageFilter'>LANGUAGE</div>
            <div className='priceFilter'>GRATUIT</div>
            <input className='searchFilter' type='text' placeholder='Entrer le nom du cours ici'/>
        </div>
    )
}

export default FilterBar
