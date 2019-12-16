import React, { useState } from 'react'

import './MenuLanguagesDeroulants.css'

function MenuPrixDeroulants() {

    const [showMenuPrice, setShowMenuPrice] = useState({
        show:false,
        value:'PRIX'
      });

      var handleChange2 = e => {
        e.preventDefault();
        var copyState = { ...showMenuPrice };
              copyState.show = !showMenuPrice.show;
              setShowMenuPrice(copyState);
      };


      var Filter = e => {
        e.preventDefault();
        var copyState = { ...showMenuPrice };
              copyState.value = e.target.dataset.value;
              copyState.show = !showMenuPrice.show;
              setShowMenuPrice(copyState);
      };


        return (
           showMenuPrice.show? <div className='menuDeroulantContainer2'>
                <div className='priceFilter'onClick={handleChange2}>{showMenuPrice.value}</div>
                <div className="langageListItem2" data-value='GRATUIT' onClick={Filter}>
                    GRATUIT
                </div>
                <div className="langageListItem2" data-value='PAYANT' onClick={Filter}>
                    PAYANT
                </div>
                <div className="langageListItem2" data-value='TOUS LES PRIX' onClick={Filter}>
                TOUS LES PRIX
                </div>
            </div>:<div className='priceFilter'onClick={handleChange2}>{showMenuPrice.value}</div>
    )
}

export default MenuPrixDeroulants
