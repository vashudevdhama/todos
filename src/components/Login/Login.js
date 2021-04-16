import React from 'react'

export default function Login({email, setEmail, password, setPassword, handleLogin, handleSignUp, handleLoginWithGoogle, hasAccount, setHasAccount, emailError, passwordError, clearInputs, clearErrors}) {
    return (
        <section>
            <div>
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e=> setEmail(e.target.value)} />
                <p>{emailError}</p>
                <label>Password</label>
                <input type="password" autoFocus required value={password} onChange={e=> setPassword(e.target.value)} />
                <p>{passwordError}</p>

                <div>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? <span onClick={()=>{clearInputs(); clearErrors(); setHasAccount(!hasAccount)}}> Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign up</button>
                            <p>Already have an account? <span onClick={()=>{clearInputs(); clearErrors(); setHasAccount(!hasAccount)}}> Sign in</span></p>
                        </>
                    )}
                    <button onClick={handleLoginWithGoogle}>Sign in with Google</button>
                </div>

            </div>
        </section>
    )
}
