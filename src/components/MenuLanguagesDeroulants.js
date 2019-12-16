import React, { useState } from 'react'

import './MenuLanguagesDeroulants.css'

function MenuLanguagesDeroulants() {

    const [showMenu, setShowMenu] = useState({
        show:true,
        value:'CATEGORIES'
      });

      var handleChange = e => {
        e.preventDefault();
        var copyState = { ...showMenu };
              copyState.show = !showMenu.show;
              setShowMenu(copyState);
      };
      console.log(showMenu.show)

      var Filter = e => {
        e.preventDefault();
        var copyState = { ...showMenu };
        console.log(e.target)
              copyState.value = e.target.dataset.value;
              copyState.show = !showMenu.show;
              setShowMenu(copyState);
      };

    return (
       showMenu.show? <div className='menuDeroulantContainer'>
            <div className='langageFilter' onClick={handleChange}>{showMenu.value}</div>
            <div className="langageListItem" data-value='HTML' onClick={Filter}>
                <img src=''></img>
                HTML
            </div>
            <div className="langageListItem" data-value='CSS' onClick={Filter}>
                 <img src=''></img>
                CSS
            </div>
            <div className="langageListItem" data-value='BOOTSTRAP' onClick={Filter}>
                <img src=''></img>
                BOOTSTRAP
            </div>
            <div className="langageListItem" data-value='JAVASCRIPT' onClick={Filter}>
                <img src=''></img>
                JAVASCRIPT
            </div>
            <div className="langageListItem" data-value='REACT' onClick={Filter}>
                <img src=''></img>
                REACT
            </div>
            <div className="langageListItem" data-value='TOUS' onClick={Filter}>
                <img src=''></img>
                TOUS
            </div>
        </div>:<div className='langageFilter' onClick={handleChange}>{showMenu.value}</div>
    )
}

export default MenuLanguagesDeroulants
