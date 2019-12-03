import React from 'react'

import './Error404.css'

const Error404 = () => <h2 className='notFound'>
        <div className='error404-box'>
            <div className='error404pics'></div>
            <div>
                <h1>ERROR 404</h1>
                <div style={{marginLeft:'25px',marginTop:'-35px'}}> PAGE NOT FOUND</div>
                <a href='http://localhost:3000/'><div className='error404-btn'>GO HOME</div></a>
            </div>
        </div>
    </h2>

export default Error404