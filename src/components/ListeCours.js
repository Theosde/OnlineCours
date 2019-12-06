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
            <img className="imgCardSize" src="https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/sublimetext_html_base.png"></img>
            </div>
            <div className="coursCard-center">
              <h2>Les bases du developpement Web</h2>
              <p>Apprenez les bases du developpement Web grace au HTML</p>
            </div>
            <div className="coursCard-right">
              <Link to="/Cours"><button className="buy-btn">Lien vers cours</button></Link>
            </div>
          </div>

          <div className="coursCard">
            <div className="coursCard-left">
            <img className="imgCardSize" src="https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/sublimetext_html_base.png"></img>
            </div>
            <div className="coursCard-center">
              <h2>Les bases du developpement Web</h2>
              <p>Apprenez les bases du developpement Web grace au HTML</p>
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