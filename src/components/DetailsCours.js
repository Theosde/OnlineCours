import React from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { connect } from "react-redux";

import './DetailsCours.css'

function DetailsCours(props) {

    const { auth }  = props;

    return (
        <div className="page-detail-container">
            <div className="colonne-gauche-detail"></div>
            <div className="colonne-centrale-detail">
                <h1>Débuter en developpement Web</h1>
                <img className="banner-width" src="../../cours1.png"></img>
                <p>Bonjour et bienvenue à toutes et à tous !</p>
                <p>Voici donc le premier chapitre de ce cours pour débutants, qui va vous apprendre à créer votre site web !</p>
                <p>Nous allons passer un certain temps ensemble, tout dépendra de la vitesse à laquelle vous apprendrez. Si vous lisez ce cours régulièrement et à une bonne vitesse, vous l'aurez terminé en une à deux semaines. Mais si vous avez besoin d'un peu plus de temps, ne vous inquiétez pas : le principal est que vous y alliez à votre rythme, de préférence en prenant du bon temps.</p>
                <p>e vous propose de commencer par la question la plus simple mais aussi la plus importante : comment fonctionnent les sites web ?</p>
                <p>Non, n'ayez pas peur de poser des questions même si vous pensez qu'elles sont « bêtes ». Il est très important que nous en parlions un peu avant de nous lancer à fond dans la création de sites !</p>
                <h2>Le fonctionnement des sites Web</h2>
                <p>Je suis certain que vous consultez des sites web tous les jours. Pour cela, vous lancez un programme appelé le navigateur web en cliquant sur l'une des icônes représentées à la figure suivante.</p>
                <p>Avec le navigateur, vous pouvez consulter n'importe quel site web. Voici par exemple un navigateur affichant le célèbre site web Wikipédia :</p>
            </div>
            <div>
                <div className="colonne-droite-detail">
                    <h2>Débuter en developpement Web</h2>
                    <h2>Les outils à télécharger pour coder</h2>
                    <h2>Commençons à coder !</h2>
                    <h2>Structurer le code</h2>
                    <h2>Le changement de page / les liens</h2>
                    <h2>inserer des Images ou des vidéo</h2>
                    <h2>Les formulaires</h2>
                    <h2>Et le style dans tous ca?</h2>
                    <h2>Le CSS c'est magique !</h2>
                    <h2>Les attribus courrants et utiles en CSS</h2>
                    <h2>Les Flexbox pour mettre en page notre première page web</h2>
                    <StripeProvider apiKey="pk_test_pmFkiabm7wViJLCJaZYH9GWw00rPuvibi8">
                      <div className="example">
                        <h2>Payer avec Stripe</h2>
                        <Elements>
                            <CheckoutForm emailUser={auth.email}/>
                        </Elements>
                      </div>
                    </StripeProvider>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    };
  };

  export default connect(mapStateToProps, null)(DetailsCours);
