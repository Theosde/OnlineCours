import React from 'react'

function SignIn() {
    return (
        <div>
            <form className="signUpFormContainer">
                <h1>LOGIN</h1>
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

                <button type="submit">
                Se connecter
                </button>

            </form>
        </div>
    )
}

export default SignIn
