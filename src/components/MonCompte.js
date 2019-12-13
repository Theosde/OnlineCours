import React, {useState} from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import { resetPassword, resetEmail } from "../store/actions/authActions"
import { storage } from '../config'
// import ProgressBar from './ProgressBar'

import './MonCompte.css'

function MonCompte(props) {
    const { auth,authError, infosActiveUser }  = props;

    const [ongletState, setOngletState] = useState(
        'onglet-1'
    );

    const [newEmail, setNewEmail] = useState('');

    const [newImage, setNewImage] = useState(
        {
            image: null,
            url:'',
            // progress:0
        }
    );

    var handleChange = e => {

        const image = {...newImage};
        if(e.target.files[0]){
            image.image = e.target.files[0]
            console.log(e.target.files[0])
                setNewImage( image )
      }
    }

    var handleUpload = () => {
        const {image} = newImage;
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',
            (snapshot) =>{
                //progress function
                // const progressOfUploaded = {...newImage};
                // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                // progressOfUploaded.progress = progress;
                // setNewImage(progressOfUploaded);
            },
            (error) =>{
                console.log('error')
            },
            () => {
                //complete fonction
                // const progressOfUploaded = {...newImage};
                // progressOfUploaded.progress = progress;
                // setNewImage(progressOfUploaded);

                storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                    const urlOfUploaded = {...newImage};
                    urlOfUploaded.url = url;
                    setNewImage(urlOfUploaded);
                    console.log(url)

                })
            })
    }


//COMPOSANT ONGLET RESET MOT DE PASSE ET CHANGEMENT D'EMAIL//

const onglet3 = <div className="onglet3">
<div>
    <h1>Compte</h1>
    <p>Modifiez vos paramètres de compte et votre mot de passe.</p>
</div>
<div className='emailChange-input-container'>
    <h3>Email actuelement utilisé :</h3>
    <p>{auth.email}</p>
    <input type='text' placeholder='Entrer ici le mail que vous souhaitez utiliser' value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
    <div className='ChangePassword-btn' onClick={() => props.resetEmail(newEmail)}>Modifier mon Email</div>
    <div className='ErrorMessage'>{authError ? <p>{authError}</p> : null}</div>
</div>

<div className='ChangePassword-btn-container'>
    <div className='ChangePassword-btn' onClick={() => props.resetPassword(auth.email)}>Réinitialiser mon Mot de Passe</div>
    <div className='ErrorMessage'>{authError ? <p>{authError}</p> : null}</div>
</div>
</div>

//COMPOSANT ONGLET PHOTO UPLOAD POUR AVATAR//

const onglet2 = <div className="onglet2">
<div>
    <h1>Photo</h1>
    <p>Ajoutez une photo sympa de vous pour votre profil.</p>
</div>
<div className='label-img-display'>
    <label>Apperçu de l'image :</label>
</div>
<div className='img-preview-container-border'>
    <div className='img-preview-container'>
        <img src={newImage.url? newImage.url: 'https://firebasestorage.googleapis.com/v0/b/cours-en-ligne-e42da.appspot.com/o/images%2Fplaceholder.jpg?alt=media&token=94e944df-2d21-41d7-baf0-eb69bce2f2f1' } width="200px" height="200px"></img>
    </div>
</div>
<div>
<div className='label-modif-img'>
        <label>Ajouter/Modifier l'image :</label>
    </div>
    {/* <ProgressBar value={newImage.progress} max="100"></ProgressBar><br></br> */}
    <div className='upload-btn-container'>
        <input id='selectedFile' accept=".gif,.jpg,.jpeg,.png" type='file' onChange={handleChange}></input>
        <button onClick={handleUpload}>Upload Image</button>
    </div>
</div>
</div>

const onglet1 = <div className="onglet1">
    <div>
        <h1>Informations personnelles</h1>
        <p>Consulter les informations que vous utilisés lors de votre navigation</p>
    </div>
    <label>Nom :</label>
    <input disabled type='text' value={infosActiveUser? infosActiveUser.NOM : ''}></input>
    <label>Prénom :</label>
    <input disabled type='text' value={infosActiveUser? infosActiveUser.PRENOM : ''}></input>
    <label>Email :</label>
    <input disabled type='text'value={infosActiveUser? infosActiveUser.EMAIL : ''}></input>
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
                    <div className="onglet-1" onClick={() => setOngletState('onglet-1')}>Informations personnelles</div>
                    <div className="onglet-2" onClick={() => setOngletState('onglet-2')}>Changer d'Avatar</div>
                    <div className="onglet-3" onClick={() => setOngletState('onglet-3')}>Email et mot de passe</div>
                </div>
                <div className='personnal-infos-container'>

                    {contentMyaccount}

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownerProps) => {
    console.log(state)
    console.log(ownerProps)

    const idUser = state.firebase.auth.uid
    const ListUser = state.firestore.data.USERS
    const activeUserInfo = ListUser ? ListUser[idUser]:null
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError,
      infosActiveUser: activeUserInfo
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      resetPassword: dataForm => dispatch(resetPassword(dataForm)),
      resetEmail: dataForm => dispatch(resetEmail(dataForm))

    };
  };


  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
      console.log("props", props);
      return [
        {
          collection: "USERS",
        }
      ];
    })
  )(MonCompte);



