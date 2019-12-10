import React from 'react'
import { Link } from "react-router-dom"
import FilterBar from './FilterBar'
import './ListeCours.css'

function ListeCours() {
    return (
      <div className="background-bg">
        <div className="center-form column">
          <FilterBar/>
          <div className="coursCard">
            <div className="coursCard-left">
            <img className="imgCardSize" src="https://i.imgsafe.org/d2/d24f00425f.jpeg"></img>
            </div>
            <div className="coursCard-center">
              <h2>Rajouter du style à vos pages avec le CSS !</h2>
              <p>le html c'est bien mais ... il nous manque un peut de couleurs pour avoir un bon rendu non ?</p>
            </div>
            <div className="coursCard-right">
              <Link to="/Cours"><button className="buy-btn">Lien vers cours</button></Link>
            </div>
          </div>

          <div className="coursCard">
            <div className="coursCard-left">
            <img className="imgCardSize" src="https://i.imgsafe.org/d2/d261c70001.jpeg"></img>
            </div>
            <div className="coursCard-center">
              <h2>Le HTML pour commencer vos pages Web</h2>
              <p>Rien de mieux que de commencer par comprendre comment est structurer une page Web , ici je parle bien d'architecture !</p>
            </div>
            <div className="coursCard-right">
              <Link to="/Cours"><button className="buy-btn">Lien vers cours</button></Link>
            </div>
          </div>
        </div>

      </div>
    )
}



export default ListeCours