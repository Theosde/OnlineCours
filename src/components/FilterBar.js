import React, { useState } from "react";
import MenuLanguagesDeroulants from "./MenuLanguagesDeroulants";
import MenuPrixDeroulants from "./MenuPrixDeroulants";

import "./DetailsCours.css";

function FilterBar(props) {
  const [showMenu, setShowMenu] = useState({
    show: false
  });
  const [showMenuPrice, setShowMenuPrice] = useState({
    show: false
  });

  const [inputValue, setInputValue] = useState("");

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

  var onChangeInputValue = e => {
    setInputValue(e.target.value);
    props.handleChangeinputParent(e.target.value);
  };

  var onChangePrixValue = e => {
    props.handleChangeDeroulantPriceParent(e);
  };

  var onChangeCategorieValue = e => {
    props.handleChangeDeroulantCategorieParent(e);
  };

  return (
    <div className="filterBar">
      {showMenu.show === false ? (
        <div className="langageFilter" onClick={handleClick}>
          CATEGORIES
        </div>
      ) : (
        <MenuLanguagesDeroulants
          listeAllCategorie={props.allCategorieParent}
          onChangeCategorieValueFilterBar={onChangeCategorieValue}
        />
      )}
      {showMenuPrice.show === false ? (
        <div className="priceFilter" onClick={handleClick2}>
          PRIX
        </div>
      ) : (
        <MenuPrixDeroulants onChangePrixValueFilterBar={onChangePrixValue} />
      )}
      <input
        className="searchFilter"
        type="text"
        value={inputValue}
        onChange={e => onChangeInputValue(e)}
        placeholder="Entrer le nom du cours ici"
      />
    </div>
  );
}

export default FilterBar;
