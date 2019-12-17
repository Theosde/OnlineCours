import React, { useState } from "react";

import { connect } from "react-redux";
import { createCours } from "../store/actions/coursActions";

function AddCoursOnglet1(props) {
  //   console.log("props in onglet 1", props);

  const [dataCoursOnglet1, setdataCoursOnglet1] = useState({
    TITRE: "",
    CATEGORIE: [],
    ISGRATUIT: true,
    PRICE: ""
  });

  const onChangeCheckbox = e => {
    var copyFormData = { ...dataCoursOnglet1 };
    if (copyFormData.CATEGORIE.includes(e.target.name)) {
      var newCategorie = copyFormData.CATEGORIE.filter(
        lang => lang != e.target.name
      );
      copyFormData.CATEGORIE = newCategorie;
      setdataCoursOnglet1(copyFormData);
    } else {
      copyFormData.CATEGORIE.push(e.target.name);
      setdataCoursOnglet1(copyFormData);
    }
  };

  return (
    <div className="onglet1">
      <div>
        <h1>Créer un Nouveau Cours</h1>
        <p>Choisissez un nom, une catégorie et un prix à votre cours</p>
      </div>
      <div className="flexCenterColumn">
        <label>Nom du Cours :</label>
        <input
          type="text"
          placeholder="Nom du cours"
          value={dataCoursOnglet1.TITRE}
          name="TITRE"
          onChange={e => {
            var copyFormData = { ...dataCoursOnglet1 };
            copyFormData[e.target.name] = e.target.value;
            setdataCoursOnglet1(copyFormData);
          }}
        ></input>
      </div>
      <div className="checkboxSuperContainer">
        <label className="label-checkbox">Catégories :</label>
        <div className="checkboxContainer">
          <div className="flexCheckBox">
            <input
              type="checkbox"
              id="HMTL"
              name="HMTL"
              onChange={onChangeCheckbox}
            ></input>
            <label for="HTML">HTML</label>
          </div>
          <div className="flexCheckBox">
            <input
              type="checkbox"
              id="CSS"
              name="CSS"
              onChange={onChangeCheckbox}
            ></input>
            <label for="CSS">CSS</label>
          </div>
          <div className="flexCheckBox">
            <input
              type="checkbox"
              id="BOOTSTRAP"
              name="BOOTSTRAP"
              onChange={onChangeCheckbox}
            ></input>
            <label for="BOOTSTRAP">BOOTSTRAP</label>
          </div>
          <div className="flexCheckBox">
            <input
              type="checkbox"
              id="JAVASCRIPT"
              name="JAVASCRIPT"
              onChange={onChangeCheckbox}
            ></input>
            <label for="JAVASCRIPT">JAVASCRIPT</label>
          </div>
          <div className="flexCheckBox">
            <input
              type="checkbox"
              id="REACT"
              name="REACT"
              onChange={onChangeCheckbox}
            ></input>
            <label for="REACT">REACT</label>
          </div>
        </div>
      </div>
      <div className="PriceContainer">
        <label>Prix :</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Entrez le prix du cours en Euros"
          value={dataCoursOnglet1.PRICE}
          name="PRICE"
          onChange={e => {
            var copyFormData = { ...dataCoursOnglet1 };
            copyFormData[e.target.name] = e.target.value;
            setdataCoursOnglet1(copyFormData);
          }}
        ></input>
      </div>
      <div className="validate-btn-onglet3-container">
        <div
          className="validate-btn-onglet-3"
          onClick={() => {
            var copyFormData = { ...dataCoursOnglet1 };
            if (copyFormData.PRICE != "") {
              copyFormData.ISGRATUIT = false;
            }

            console.log(copyFormData);

            // props.createCours({
            //   TITRE: "Le petit Canard",
            //   CATEGORIE: ["HTML", "CSS"],
            //   ISGRATUIT: true,
            //   CONTENU: {
            //     NomDuPremierChapitre: [
            //       { CONTENU_AFFICHER: "Il était une fois", TYPE: "titre" },
            //       {
            //         CONTENU_AFFICHER:
            //           "Il était une fois blablablabl balbal bl ablbal blab alb abl ablbblb alba",
            //         TYPE: "text"
            //       }
            //     ]
            //   }
            // });
          }}
        >
          Enregistrer ce cours
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createCours: dataForm => dispatch(createCours(dataForm))
  };
};

export default connect(null, mapDispatchToProps)(AddCoursOnglet1);
