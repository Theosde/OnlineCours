import React, { useState, useEffect } from "react";

function AddCoursOnglet3(props) {
  const [contenuChapitreOnglet3, setContenuChapitreOnglet3] = useState([]);

  return (
    <div className="onglet3">
      <div className="titre-container-page">
        <h1>Créer Mon Chapitre</h1>
        <p>
          Supprimer, modifier ou créer de nouveaux éléments dans votre chapitre
        </p>
      </div>
      <div className="UnSeulChapitreContainer">
        <div className="mapDesChapitresRenderCol1">
          <img className="img-hover-1" src="../arrow2.png"></img>
          <img className="img-hover-2" src="../arrow.png"></img>
        </div>
        <div className="mapDesChapitresRenderCol2">
          Deuxieme chapitre: Les input
        </div>
        <div className="mapDesChapitresRenderCol3">
          {" "}
          <div className="suppress-btn">-</div>
          <div className="modify-btn">Modifier</div>
        </div>
      </div>
      <div className="UnSeulChapitreContainer">
        <div className="mapDesChapitresRenderCol1">
          <img className="img-hover-1" src="../arrow2.png"></img>
          <img className="img-hover-2" src="../arrow.png"></img>
        </div>
        <div className="mapDesChapitresRenderCol2">
          Les inputs sont bien souvent des champs de texte, des champs de
          selections, ou encore de boîtes à cocher aussi appeler checkbox. ils
          sont notement utiliser dans les formulaire de connexion ou
          d'inscription pour récupérer des données coter serveur.
        </div>
        <div className="mapDesChapitresRenderCol3">
          {" "}
          <div className="suppress-btn">-</div>
          <div className="modify-btn">Modifier</div>
        </div>
      </div>
      <div className="UnSeulChapitreContainer">
        <div className="mapDesChapitresRenderCol1">
          <img className="img-hover-1" src="../arrow2.png"></img>
          <img className="img-hover-2" src="../arrow.png"></img>
        </div>
        <div className="mapDesChapitresRenderCol2">
          <img src="../cours1.png" width="600"></img>
        </div>
        <div className="mapDesChapitresRenderCol3">
          {" "}
          <div className="suppress-btn">-</div>
          <div className="modify-btn">Modifier</div>
        </div>
      </div>
      <div className="UnSeulChapitreContainer">
        <div className="mapDesChapitresRenderCol1">
          <img className="img-hover-1" src="../arrow2.png"></img>
          <img className="img-hover-2" src="../arrow.png"></img>
        </div>
        <div className="mapDesChapitresRenderCol2">
          Les inputs sont bien souvent des champs de texte, des champs de
          selections, ou encore de boîtes à cocher aussi appeler checkbox. ils
          sont notement utiliser dans les formulaire de connexion ou
          d'inscription pour récupérer des données coter serveur.ils sont
          notement utiliser dans les formulaire de connexion ils sont notement
          utiliser dans les formulaire de connexion .
        </div>
        <div className="mapDesChapitresRenderCol3">
          {" "}
          <div className="suppress-btn">-</div>
          <div className="modify-btn">Modifier</div>
        </div>
      </div>

      <div className="text-input-adding-container">
        <textarea type="text"></textarea>
        <div className="mapDesChapitresRenderCol3">
          {" "}
          <div className="add-btn2">+</div>
        </div>
      </div>
      <div className="validate-btn-onglet3-container">
        <div
          className="validate-btn-onglet-3"
          onClick={() => {
            props.handleDataOnglet3Parent({
              redirect: "onglet-1",
              data: {
                nomNewChapitre: [{ CONTENU_AFFICHER: "hello", TYPE: "titre" }]
              }
            });
          }}
        >
          Enregistrer ce chapitre
        </div>
      </div>
    </div>
  );
}

export default AddCoursOnglet3;
