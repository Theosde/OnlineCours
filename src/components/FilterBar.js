import React, { useState }from 'react'
import MenuLanguagesDeroulants from './MenuLanguagesDeroulants'
import MenuPrixDeroulants from './MenuPrixDeroulants'

import './DetailsCours.css'

function FilterBar() {

    const [showMenu, setShowMenu] = useState({
        show:false
      });
      const [showMenuPrice, setShowMenuPrice] = useState({
        show:false
      });

      var handleClick = e => {
        e.preventDefault();
        var copyState = { ...showMenu };
              copyState.show = !showMenu.show;
              setShowMenu(copyState);
      };

      var handleClick2 = e => {
        e.preventDefault();
        var copyState = { ...showMenuPrice };
              copyState.show = !showMenuPrice.show;
              setShowMenuPrice(copyState);
      };

    return (
        <div className='filterBar'>
            {showMenu.show === false ?<div className='langageFilter' onClick={handleClick}>CATEGORIES</div>:<MenuLanguagesDeroulants/>}
            {showMenuPrice.show === false ?<div className='priceFilter'onClick={handleClick2}>PRIX</div>:<MenuPrixDeroulants/>}
            <input className='searchFilter' type='text' placeholder='Entrer le nom du cours ici'/>
        </div>
    )
}

export default FilterBar
