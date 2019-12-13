import React, { useState, useEffect } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import "./DetailsCours.css";

function DetailsCours(props) {
  const { auth, detailsCours, infoUserConnect } = props;

  const [listeSommaire, setListeSommaire] = useState([]);
  const [infoCours, setInfoCours] = useState({});
  const [stateInfoAfficher, setStateInfoAfficher] = useState([]);
  const [authorisationCours, setauthorisationCours] = useState(true);

  useEffect(() => {
    if (detailsCours) {
      // cours acheter ou non
      if (infoUserConnect) {
        if (infoUserConnect.COURS.includes(props.match.params.idCours)) {
          console.log("cours acheter");
          setInfoCours(detailsCours);
          setListeSommaire(Object.keys(detailsCours.CONTENU));
          setStateInfoAfficher(
            detailsCours.CONTENU[props.match.params.nomChapitre]
          );
        } else {
          setInfoCours(detailsCours);
          setListeSommaire(Object.keys(detailsCours.CONTENU));
          setStateInfoAfficher(
            detailsCours.CONTENU[props.match.params.nomChapitre]
          );
          setauthorisationCours(false);

          console.log("cours pas acheter");
        }
      }

      ////////////verif si le cours est acheter else suppr sommaire et changer contenuAfficher
    }
  }, [infoUserConnect]);

  useEffect(() => {
    //if cours est acheter
    if (detailsCours) {
      setStateInfoAfficher(
        detailsCours.CONTENU[props.match.params.nomChapitre]
      );
    }
  }, [props.match.params.nomChapitre]);

  if (detailsCours) {
    console.log("infoUserConnect", infoUserConnect);
    console.log("infoCours", infoCours);
    console.log("stateInfoAfficher", stateInfoAfficher);
    console.log("listeSommaire", listeSommaire);

    console.log(
      "----------------------------------------------------------------------------------------"
    );

    var listChapitre = listeSommaire.map((chapitre, key) => {
      if (authorisationCours) {
        return (
          <Link to={`/Cours/${props.match.params.idCours}/${chapitre}`}>
            <h2>{chapitre}</h2>
          </Link>
        );
      } else {
        return <h2>{chapitre}</h2>;
      }
    });
    var contenuAfficher = stateInfoAfficher.map(info => {
      if (info.TYPE === "titre") {
        return <h1>{info.CONTENU_AFFICHER}</h1>;
      } else if (info.TYPE === "text") {
        return <p>{info.CONTENU_AFFICHER}</p>;
      }
    });
  }

  //////////////////////////////////////////////////////////////
  return (
    <div>
      <div className="titre_cours">{infoCours.TITRE}</div>
      <div className="page-detail-container">
        <div className="colonne-gauche-detail"></div>
        <div className="colonne-centrale-detail">{contenuAfficher}</div>
        <div>
          <div className="colonne-droite-detail">{listChapitre}</div>
          <div className="stripe-div">
            <StripeProvider apiKey="pk_test_pmFkiabm7wViJLCJaZYH9GWw00rPuvibi8">
              <div className="example">
                <h2>Payer avec Stripe</h2>
                <Elements>
                  <CheckoutForm emailUser={auth.email} />
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.idCours;
  const cours = state.firestore.data.COURS;
  const detailsCours = cours ? cours[id] : null;

  const allusers = state.firestore.data.userdata;
  const userIdConnect = state.firebase.auth.uid;

  console.log(allusers);
  console.log(userIdConnect);

  const infoUserConnect = allusers ? allusers[userIdConnect] : null;
  return {
    auth: state.firebase.auth,
    detailsCours: detailsCours,
    infoUserConnect: infoUserConnect
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect(theProps => {
    return [
      {
        collection: `COURS`,
        collection: `USERS`,
        storeAs: "userdata"
      }
    ];
  })
)(DetailsCours);
