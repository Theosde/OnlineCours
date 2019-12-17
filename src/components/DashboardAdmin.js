import React, { useState } from "react";

import DashboardOnglet1 from "./AddCoursOnglet1";
import DashboardOnglet2 from "./AddCoursOnglet2";
import DashboardOnglet3 from "./AddCoursOnglet3";

import "./DashboardAdmin.css";

function DashBoardAdmin(props) {
  const [ongletState, setOngletState] = useState("onglet-1");

  const [tableauNomChapitre, setTableauNomChapitre] = useState([
    "Les Tableaux",
    "Les Functions",
    "Les Variables"
  ]);

  const [dataContenuCours, setDataContenuCours] = useState({
    TITRE: "Le petit Canard",
    CATEGORIE: ["HTML", "CSS"],
    ISGRATUIT: true,
    CONTENU: {
      NomDuPremierChapitre: [
        { CONTENU_AFFICHER: "Il était une fois", TYPE: "titre" },
        {
          CONTENU_AFFICHER:
            "Il était une fois blablablabl balbal bl ablbal blab alb abl ablbblb alba",
          TYPE: "text"
        }
      ]
    }
  });

  const [dataChapitreTransmettre, setDataChapitreTransmettre] = useState({});

  ////// revers data flow ONGLET2
  var reversDataOnglet2 = e => {
    console.log("LOG IN DASHBOARD INFO ONGLET 2 new order", e);
  };

  var changeRedirectOnglet = e => {
    console.log("Changer pour onglet :", e);
    setOngletState(e.redirect);
    setDataChapitreTransmettre(dataContenuCours.CONTENU[e.chapitre]);
  };
  ////// revers data flow ONGLET3
  var reversDataOnglet3 = dataChapitre => {
    var copyDataCours = { ...dataContenuCours };

    copyDataCours.CONTENU[Object.keys(dataChapitre.data)[0]] =
      dataChapitre.data[Object.keys(dataChapitre.data)[0]];

    setOngletState(dataChapitre.redirect);
    setDataContenuCours(copyDataCours);
  };

  const onglet1 = <DashboardOnglet1 />;
  const onglet2 = (
    <DashboardOnglet2
      tableauChapitre={tableauNomChapitre}
      handleDataOnglet2Parent={reversDataOnglet2}
      handleRedirectOngletParent={changeRedirectOnglet}
    />
  );
  const onglet3 = (
    <DashboardOnglet3
      handleDataOnglet3Parent={reversDataOnglet3}
      dataThisChapitreParent={dataChapitreTransmettre}
    />
  );

  console.log(props);

  var contentMyaccount = null;

  if (ongletState === "onglet-1") {
    contentMyaccount = onglet1;
  } else if (ongletState === "onglet-2") {
    contentMyaccount = onglet2;
  } else if (ongletState === "onglet-3") {
    contentMyaccount = onglet3;
  }

  return (
    <div className="background-bg">
      <div className="center-form-myAccount">
        <div className="onglet-container">
          <div className="onglet-1" onClick={() => setOngletState("onglet-1")}>
            CREER UN COURS
          </div>
          <div className="onglet-2" onClick={() => setOngletState("onglet-2")}>
            CHAPITRES ET AJOUT DE CHAPITRES
          </div>
          <div className="onglet-3" onClick={() => setOngletState("onglet-3")}>
            CONTENU DU CHAPITRE
          </div>
        </div>
        <div className="personnal-infos-container">{contentMyaccount}</div>
      </div>
    </div>
  );
}

export default DashBoardAdmin;
