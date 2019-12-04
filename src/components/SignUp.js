import React from 'react';

import './SignUp.css';

function SignUp () {



    return(
      <div className='background-bg'>
        <div className='center-form'>
          <form className="signUpFormContainer">
              <h1>INSCRIPTION</h1>
              <input
                name="username"
                type="text"
                placeholder="Full Name"
              />
              <input
                name="email"
                type="text"
                placeholder="Email Address"
              />
              <input
                name="passwordOne"
                type="password"
                placeholder="Password"
              />
              <input
                name="passwordTwo"
                type="password"
                placeholder="Confirm Password"
              />

              <button type="submit">
                S'inscrire
              </button>

            </form>
          </div>
        </div>
    )
};



export default SignUp;


