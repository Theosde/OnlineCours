import React from 'react'
import './VentesHistoric.css'

function VentesHistoric() {
    return (
        <div className="background-bg">
            <div className="center-form column">
                <div className="sells-list-container">

                    <div>
                        <h1>Chiffre des ventes</h1>
                        <p>Consulter ici le total des ventes de cours</p>
                    </div>

                    <div className='filterSalesContainer'>
                        <label>Choississez le mois et l'année :</label>
                        <select name="Annee" form="date">
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                        </select>
                        <select name="Mois" form="date">
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                            <option value='03'>03</option>
                            <option value='04'>04</option>
                            <option value='05'>05</option>
                            <option value='06'>06</option>
                            <option value='07'>07</option>
                            <option value='08'>08</option>
                            <option value='09'>09</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                        </select>
                    </div>



                    <div className='list-element-cours header'>
                        <div className='TrenteTroisPourcent'>Nom du cours</div>
                        <div className='TrenteTroisPourcent center'>Nombre de fois vendu</div>
                        <div className='TrenteTroisPourcent end'>Chiffre d'affaire</div>
                    </div>


                    <div className='list-element-cours'>
                        <div className='TrenteTroisPourcent'>Cours React intégral</div>
                        <div className='TrenteTroisPourcent center'>26</div>
                        <div className='TrenteTroisPourcent end'>260 Euros</div>
                    </div>
                    <div className='list-element-cours'>
                        <div className='TrenteTroisPourcent'>Cours Javascript intégral</div>
                        <div className='TrenteTroisPourcent center'>9</div>
                        <div className='TrenteTroisPourcent end'>135 Euros</div>
                    </div>
                    <div className='list-element-cours'>
                        <div className='TrenteTroisPourcent'>Cours HTML-CSS intégral</div>
                        <div className='TrenteTroisPourcent center'>35</div>
                        <div className='TrenteTroisPourcent end'>420 Euros</div>
                    </div>
                    <div className='list-element-cours'>
                        <div className='TrenteTroisPourcent'>Cours Base de donée Firebase</div>
                        <div className='TrenteTroisPourcent center'>3</div>
                        <div className='TrenteTroisPourcent end'>45 Euros</div>
                    </div>



                    <div className='list-element-cours'>
                        <div className='TrenteTroisPourcent'></div>
                        <div className='TrenteTroisPourcent center bold'>Total :</div>
                        <div className='TrenteTroisPourcent end bold'>45 Euros</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VentesHistoric
