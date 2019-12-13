import React from 'react'

import './Dashboard.css'

function DashBoard() {
    return (
        <div className="background-bg">
            <div className="center-form column">
            <div style={{width:'100%'}}>

            <table className="blueTable">
              <thead>
                <tr>
                    <th>Cours</th>
                    <th>Inscription</th>
                    <th>Progression</th>
                    <th>Cours Suivis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td className='align'>HTML et CSS</td>
                    <td className='align'>08/06/2019</td>
                    <td className='align'></td>
                    <td className='align'></td>
                </tr>
                <tr>
                    <td className='align'>BOOTSTRAP</td>
                    <td className='align'>12/06/2019</td>
                    <td className='align'></td>
                    <td className='align'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}


export default DashBoard
