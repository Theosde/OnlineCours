import React, { useState } from "react";

import "./MenuLanguagesDeroulants.css";

function MenuLanguagesDeroulants(props) {
  const [showMenu, setShowMenu] = useState({
    show: true,
    value: "CATEGORIES"
  });

  var handleChange = e => {
    e.preventDefault();
    var copyState = { ...showMenu };
    copyState.show = !showMenu.show;
    setShowMenu(copyState);
  };

  var Filter = e => {
    e.preventDefault();
    props.onChangeCategorieValueFilterBar(e.target.dataset.value);
    var copyState = { ...showMenu };
    copyState.value = e.target.dataset.value;
    copyState.show = !showMenu.show;
    setShowMenu(copyState);
  };

  console.log("IN menu deroulant", props.listeAllCategorie);
  return showMenu.show ? (
    <div className="menuDeroulantContainer">
      <div className="langageFilter" onClick={handleChange}>
        {showMenu.value}
      </div>
      {props.listeAllCategorie.map(e => {
        return (
          <div className="langageListItem" data-value={e} onClick={Filter}>
            <img src=""></img>
            {e}
          </div>
        );
      })}
      <div className="langageListItem" data-value="TOUS" onClick={Filter}>
        <img src=""></img>
        TOUS
      </div>
    </div>
  ) : (
    <div className="langageFilter" onClick={handleChange}>
      {showMenu.value}
    </div>
  );
}

export default MenuLanguagesDeroulants;
