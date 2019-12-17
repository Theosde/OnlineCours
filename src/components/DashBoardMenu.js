import React from 'react'
import { Link } from "react-router-dom"

import './DashBoardMenu.css'

function DashBoardMenu() {
    return (
        <div className="background-bg">
            <div className='center-form-myAccount'>
                <div className='ligne-1-panel'>
                <Link to="/add-cours">
                    <div class="module">
                        <img src='../newcours.png'></img>
                        <p>Créer un nouveau cours</p>
                    </div>
                </Link>
                    <div class="module">
                        <img src='../cours.png'></img>
                        <p>Modifier un cours existant</p>
                    </div>
                </div>
                <div className='ligne-2-panel'>
                <Link to="/Ventes-historic">
                    <div class="module">
                        <img src='../income.png'></img>
                        <p>Consulter les ventes de cours</p>
                    </div>
                </Link>
                    <div class="module">
                        <img src='../stats.png'></img>
                        <p>Consulter les statistiques</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardMenu
