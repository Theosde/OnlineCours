import React, {useState} from 'react'

import './DashboardAdmin.css'

function DashBoardAdmin(props) {

  const [ongletState, setOngletState] = useState(
    'onglet-1'
);

//ONGLET 3 DASHBOARD//

const onglet3 = <div className="onglet3">
<div>
  <h1>Compte</h1>
  <p>Modifiez vos paramètres de compte et votre mot de passe.</p>
</div>
<div className='emailChange-input-container'>
  <h3>Email actuelement utilisé :</h3>
</div>
</div>
//ONGLET 2 DASHBOARD//

const onglet2 = <div className="onglet2">
  <div className='mapDesChapitres-Container'>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img className='img-hover-1' src='../arrow2.png'></img><img className='img-hover-2' src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Premier chapitre : Les balises</div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img src='../arrow2.png'></img><img src='../arrow.png'></img></div>
      <div className='mapDesChapitresRenderCol2'>Deuxieme chapitre: Les input </div>
      <div className='mapDesChapitresRenderCol3'> <div className='suppress-btn'>-</div><div className='modify-btn'>Modifier</div></div>
    </div>
    <div className='UnSeulChapitreContainer'>
      <div className='mapDesChapitresRenderCol1'><img src='../arrow2.png'></img><img src='../arrow.png'></img></div>
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
      <h1>Créer un nouveau cours</h1>
      <p>Choisissez un nom, une catégorie et un prix à votre cours</p>
  </div>
  <div className='flexCenterColumn'>
    <label>Nom du Cours :</label>
    <input  type='text' placeholder='Nom du cours'></input>
  </div>
  <div className='checkboxSuperContainer'>
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
                <div className="onglet-3" onClick={() => setOngletState('onglet-3')}>CONTENU DU COURS</div>
            </div>
            <div className='personnal-infos-container'>

            {contentMyaccount}
            </div>
        </div>
    </div>
  )
}


export default DashBoardAdmin



