import React, { useState, useEffect } from "react";

function AddCoursOnglet2(props) {
  const [dataCoursOnglet2, setdataCoursOnglet2] = useState([]);

  const [mapChapitre, setmapChapitre] = useState([]);

  useEffect(() => {
    console.log("ONGLET 2 - tableau de Chapitre", props.tableauChapitre);
    setdataCoursOnglet2(props.tableauChapitre);
  }, [props.handleDataOnglet2Parent]);

  ///function changer l'ordre
  var moveInTableau = async (table, old_index, new_index) => {
    while (old_index < 0) {
      old_index += table.length;
    }
    while (new_index < 0) {
      new_index += table.length;
    }
    if (new_index >= table.length) {
      let k = new_index - table.length;
      while (k-- + 1) {
        table.push(undefined);
      }
    }
    table.splice(new_index, 0, table.splice(old_index, 1)[0]);
    return Promise.all(table);
  };

  useEffect(() => {
    props.handleDataOnglet2Parent(dataCoursOnglet2);

    setmapChapitre(
      dataCoursOnglet2.map((chapitre, key) => {
        var first = false;
        var last = false;
        var unique = false;
        if (dataCoursOnglet2.length == 1) {
          unique = true;
        } else {
          if (key == dataCoursOnglet2.length - 1) {
            last = true;
          } else if (key == 0) {
            first = true;
          }
        }

        console.log(unique);
        return (
          <div className="UnSeulChapitreContainer">
            <div className="mapDesChapitresRenderCol1">
              {first ? null : unique ? null : (
                <img
                  className="img-hover-1"
                  src="../arrow2.png"
                  onClick={() => {
                    var ancien = dataCoursOnglet2.indexOf(chapitre);
                    var news = ancien - 1;

                    moveInTableau(dataCoursOnglet2, ancien, news).then(
                      newOrder => {
                        setdataCoursOnglet2(newOrder);
                      }
                    );
                  }}
                ></img>
              )}

              {last ? null : unique ? null : (
                <img
                  className="img-hover-2"
                  src="../arrow.png"
                  onClick={() => {
                    var ancien = dataCoursOnglet2.indexOf(chapitre);
                    var news = ancien + 1;

                    moveInTableau(dataCoursOnglet2, ancien, news).then(
                      newOrder => {
                        setdataCoursOnglet2(newOrder);
                      }
                    );
                  }}
                ></img>
              )}
            </div>
            <div className="mapDesChapitresRenderCol2">
              {`Chapitre : ${chapitre}`}
            </div>
            <div className="mapDesChapitresRenderCol3">
              <div
                className="suppress-btn"
                onClick={() => {
                  var copyArrayChapitre = [...dataCoursOnglet2];
                  copyArrayChapitre.splice(
                    copyArrayChapitre.indexOf(chapitre),
                    1
                  );
                  setdataCoursOnglet2(copyArrayChapitre);
                }}
              >
                -
              </div>
              <div
                className="modify-btn"
                onClick={() => {
                  props.handleRedirectOngletParent({
                    redirect: "onglet-3",
                    chapitre
                  });
                }}
              >
                Modifier
              </div>
            </div>
          </div>
        );
      })
    );
  }, [dataCoursOnglet2]);

  return (
    <div className="onglet2">
      <div className="titre-container-page">
        <h1>Ajouter ou Modifier un Chapitre</h1>
        <p>Supprimer, modifier ou créer un nouveau chapitre dans ce cours</p>
      </div>
      <div className="mapDesChapitres-Container">{mapChapitre}</div>
      <div className="add-container">
        <div
          className="add-btn"
          onClick={() => {
            props.handleRedirectOngletParent({
              redirect: "onglet-3",
              chapitre: null
            });
          }}
        >
          +
        </div>
        <p>Ajouter un Chapitre à mon cours</p>
      </div>
    </div>
  );
}

export default AddCoursOnglet2;
