import React, {useState} from 'react'

import './DashboardAdmin.css'

function DashBoardAdmin(props) {

  const [ongletState, setOngletState] = useState(
    'onglet-1'
);

//ONGLET 3 DASHBOARD//

const onglet3 = <div className="onglet3">
  <div className='titre-container-page'>
      <h1>Créer Mon Chapitre</h1>
      <p>Supprimer, modifier ou créer de nouveaux éléments dans votre chapitre</p>
  </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Deuxieme chapitre: Les input </div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Les inputs sont bien souvent des champs de texte, des champs de selections, ou encore de boîtes à cocher aussi appeler checkbox.
      ils sont notement utiliser dans les formulaire de connexion ou d'inscription pour récupérer des données coter serveur.</div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'><img src='../cours1.png' width='600'></img></div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Les inputs sont bien souvent des champs de texte, des champs de selections, ou encore de boîtes à cocher aussi appeler checkbox.
      ils sont notement utiliser dans les formulaire de connexion ou d'inscription pour récupérer des données coter serveur.ils sont notement utiliser dans les formulaire de connexion 
      ils sont notement utiliser dans les formulaire de connexion .</div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>

    <div className='text-input-adding-container'>
      <textarea type='text'></textarea>
      <div className='mapDesChapitresRenderCol3'> <div className='add-btn2'>+</div></div>
    </div>
    <div className='validate-btn-onglet3-container'>
      <div className='validate-btn-onglet-3'>Enregistrer ce chapitre</div>
    </div>
</div>
//ONGLET 2 DASHBOARD//

const onglet2 = <div className="onglet2">
  <div className='titre-container-page'>
      <h1>Ajouter ou Modifier un Chapitre</h1>
      <p>Supprimer, modifier ou créer un nouveau chapitre dans ce cours</p>
  </div>
  <div className='mapDesChapitres-Container'>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Premier chapitre : Les balises</div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Deuxieme chapitre: Les input </div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img  className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Troisième chapitre: Construire un formulaires </div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
  </div>
  <div className='add-container'>
    <div className='add-btn'>+</div>
    <p>Ajouter un Chapitre à mon cours</p>
  </div>
</div>
//ONGLET 1 DASHBOARD//
const onglet1 = <div className="onglet1">
  <div>
      <h1>Créer un Nouveau Cours</h1>
      <p>Choisissez un nom, une catégorie et un prix à votre cours</p>
  </div>
  <div className='flexCenterColumn'>
    <label>Nom du Cours :</label>
    <input  type='text' placeholder='Nom du cours'></input>
  </div>
  <div className='checkboxSuperContainer'>
      <label className='label-checkbox'>Catégories :</label>
      <div className='checkboxContainer'>
        <div className='flexCheckBox'>
          <input type="checkbox" id="HMTL" name="HMTL"></input>
          <label for="HTML">HTML</label>
        </div>
        <div className='flexCheckBox'>
          <input type="checkbox" id="CSS" name="CSS"></input>
          <label for="CSS">CSS</label>
        </div>
        <div className='flexCheckBox'>
          <input type="checkbox" id="BOOTSTRAP" name="BOOTSTRAP"></input>
          <label for="BOOTSTRAP">BOOTSTRAP</label>
        </div>
        <div className='flexCheckBox'>
          <input type="checkbox" id="JAVASCRIPT" name="JAVASCRIPT"></input>
          <label for="JAVASCRIPT">JAVASCRIPT</label>
        </div>
        <div className='flexCheckBox'>
          <input type="checkbox" id="REACT" name="REACT"></input>
          <label for="REACT">REACT</label>
        </div>
      </div>
  </div>
    <div className='PriceContainer'>
      <label>Prix :</label>
      <input  type='text' placeholder='Entrez le prix du cours en Euros'></input>
    </div>
    <div className='validate-btn-onglet3-container'>
      <div className='validate-btn-onglet-3'>Enregistrer ce cours</div>
    </div>
</div>

console.log(props);

var contentMyaccount = null

if(ongletState === 'onglet-1'){
contentMyaccount = onglet1
}else if(ongletState === 'onglet-2') {
contentMyaccount = onglet2
}else if(ongletState === 'onglet-3') {
contentMyaccount = onglet3
}



return (
    <div className="background-bg">
        <div className='center-form-myAccount'>
            <div className="onglet-container">
                <div className="onglet-1" onClick={() => setOngletState('onglet-1')}>CREER UN COURS</div>
                <div className="onglet-2" onClick={() => setOngletState('onglet-2')}>CHAPITRES ET AJOUT DE CHAPITRES</div>
                <div className="onglet-3" onClick={() => setOngletState('onglet-3')}>CONTENU DU CHAPITRE</div>
            </div>
            <div className='personnal-infos-container'>

            {contentMyaccount}
            </div>
        </div>
    </div>
  )
}


export default DashBoardAdmin



