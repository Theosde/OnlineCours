import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import "./ListeCours.css";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function ListeCours(props) {
  const { cours } = props;
  console.log("log cours props", cours);

  var [filterPrice, setFilterPrice] = useState("");
  var [filterCategorie, setFilterCategorie] = useState("");
  var [filterSearch, setFilterSearch] = useState("");
  var [stateAllCategorie, setStateAllCategorie] = useState([]);

  //pagination
  const [targetPage, setTargetPage] = useState(1);
  const [nbPage, setNbPage] = useState(0);

  var mapListeCours = [];

  useEffect(() => {
    if (cours !== undefined) {
      var allCategorie = [];
      cours.forEach(elements => {
        elements.CATEGORIE.forEach(element => {
          if (!allCategorie.includes(element)) {
            allCategorie.push(element);
          }
        });
      });
      setStateAllCategorie(allCategorie.sort());
    }
  }, [cours]);

  // revers data flow input
  var handleChangeInput = e => {
    setFilterSearch(e);
    console.log("LOG IN LISTE COUR INFO INPUT FILTER", e);
  };
  // revers data flow deroulant price
  var handleChangeDeroulantPrice = e => {
    setFilterPrice(e);
    console.log("LOG IN LISTE COUR INFO DEROULANT PRICE FILTER", e);
  };
  // revers data flow deroulant categorie
  var handleChangeDeroulantCategorie = e => {
    setFilterCategorie(e);
    console.log("LOG IN LISTE COUR INFO DEROULANT CATEGORIE FILTER", e);
  };

  if (cours !== undefined) {
    //filter
    var startData = cours;
    console.log("liste cours before filter categorie", startData);

    /////// filter price
    var fitreParPrice = startData.filter(infoCour => {
      if (filterPrice == "GRATUIT") {
        return infoCour.ISGRATUIT == true;
      } else if (filterPrice == "PAYANT") {
        return infoCour.ISGRATUIT == false;
      } else {
        return infoCour;
      }
    });

    /////// filter categorie
    var fitreParCategorie = fitreParPrice.filter(infoCour => {
      if (filterCategorie == "" || filterCategorie == "TOUS") {
        return infoCour;
      } else {
        return infoCour.CATEGORIE.includes(filterCategorie);
      }
    });

    // search bar
    var newAllCours = fitreParCategorie;
    var regex = new RegExp("(" + filterSearch.toLowerCase() + "){1,}");
    if (filterSearch != "") {
      newAllCours = fitreParCategorie.filter(g =>
        regex.test(g.TITRE.toLowerCase())
      );
    }

    //  PAGINATION
    var copyAfterFilterCours = [...newAllCours];

    if (copyAfterFilterCours.length > 10) {
      var nbDePage = Math.ceil(copyAfterFilterCours.length / 10);
      if (nbDePage != nbPage) {
        setNbPage(nbDePage);
      }
    } else {
      var nbDePage = 1;
      if (nbDePage != nbPage) {
        setNbPage(nbDePage);
      }
    }

    var finalTableauCoursAvecPagination = copyAfterFilterCours.splice(
      (targetPage - 1) * 10,
      10
    );

    var tableMap = [];
    for (var i = 1; i <= nbDePage; i++) {
      tableMap.push(i);
    }

    //BTN Pagination
    var paginationLi;
    paginationLi = tableMap.map(p => {
      if (tableMap.length == 1) {
        return null;
      } else {
        return (
          <li
            className="pagination-btn"
            onClick={() => {
              setTargetPage(p);
            }}
          >
            {p}
          </li>
        );
      }
    });

    var paginationFirst = (
      <li
        className="pagination-btn"
        onClick={() => {
          setTargetPage(1);
        }}
      >
        {" "}
        {"<<"}{" "}
      </li>
    );
    var paginationPrev = (
      <li
        className="pagination-btn"
        onClick={() => {
          setTargetPage(targetPage - 1);
        }}
      >
        {" "}
        {"<"}{" "}
      </li>
    );
    var paginationSui = (
      <li
        className="pagination-btn"
        onClick={() => {
          setTargetPage(targetPage + 1);
        }}
      >
        {" "}
        {">"}{" "}
      </li>
    );
    var paginationLast = (
      <li
        className="pagination-btn"
        onClick={() => {
          setTargetPage(paginationLi.length);
        }}
      >
        {" "}
        {">>"}{" "}
      </li>
    );

    console.log(
      "finalTableauCoursAvecPagination",
      finalTableauCoursAvecPagination
    );

    if (finalTableauCoursAvecPagination.length == 0) {
      mapListeCours = <div>Cette recherche abouti à aucun résultat</div>;
    } else {
      //////// debut du map
      mapListeCours = finalTableauCoursAvecPagination.map((cour, id) => {
        // console.log(
        //   "dans map",
        //   cour.CONTENU[Object.keys(cour.CONTENU)[0]][1].CONTENU_AFFICHER
        // );
        return (
          <div className="coursCard">
            <div className="coursCard-left">
              <img
                className="imgCardSize"
                src="https://image.noelshack.com/fichiers/2019/50/6/1576346446-bg-html.jpg"
                alt="imageCoursBanner"
              ></img>
            </div>
            <div className="coursCard-center">
              <h2>{cour.TITRE}</h2>
              <p>
                {cour.CONTENU[
                  Object.keys(cour.CONTENU)[0]
                ][1].CONTENU_AFFICHER.slice(0, 150) + "..."}
              </p>
            </div>
            <div className="coursCard-right">
              <Link to={`/Cours/${cour.id}/${Object.keys(cour.CONTENU)[0]}`}>
                <button className="buy-btn">Lien vers cours</button>
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <div className="background-bg">
      <div className="center-form column">
        <FilterBar
          allCategorieParent={stateAllCategorie}
          handleChangeinputParent={handleChangeInput}
          handleChangeDeroulantPriceParent={handleChangeDeroulantPrice}
          handleChangeDeroulantCategorieParent={handleChangeDeroulantCategorie}
        />

        {mapListeCours}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          className="supress-padding"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {targetPage == 1 ? null : paginationFirst}
          {targetPage == 1 ? null : paginationPrev}
          {paginationLi}
          {nbPage == targetPage ? null : paginationSui}
          {nbPage == targetPage ? null : paginationLast}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    cours: state.firestore.ordered.COURS
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect(props => {
    console.log("props", props);
    return [
      {
        collection: "COURS",
        orderBy: ["TITRE", "asc"]
      }
    ];
  })
)(ListeCours);
