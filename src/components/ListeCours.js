import React from "react";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import "./ListeCours.css";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function ListeCours(props) {
  const { cours } = props;

  console.log("log cours props", cours);

  var mapListeCours = [];

  if (cours !== undefined) {
    //filter

    mapListeCours = cours.map((cour, id) => {
      console.log(
        "dans map",
        cour.CONTENU[Object.keys(cour.CONTENU)[0]][1].CONTENU_AFFICHER
      );
      return (
        <div className="coursCard">
          <div className="coursCard-left">
            <img
              className="imgCardSize"
              src="https://i.imgsafe.org/d2/d261c70001.jpeg"
              alt='imageCoursBanner'
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

  console.log(mapListeCours);

  return (
    <div className="background-bg">
      <div className="center-form column">
        <FilterBar />

        {mapListeCours}
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
