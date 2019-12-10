import React, { useEffect } from "react";
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

  if (cours != undefined) {
    mapListeCours = cours.map((cour, id) => {
      console.log("dans map", cour);
      return (
        <div className="coursCard">
          <div className="coursCard-left">
            <img
              className="imgCardSize"
              src="https://i.imgsafe.org/d2/d261c70001.jpeg"
            ></img>
          </div>
          <div className="coursCard-center">
            <h2>Le HTML pour commencer vos pages Web</h2>
            <p>
              Rien de mieux que de commencer par comprendre comment est
              structurer une page Web , ici je parle bien d'architecture !
            </p>
          </div>
          <div className="coursCard-right">
            <Link to="/Cours">
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
