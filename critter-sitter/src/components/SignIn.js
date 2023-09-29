import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function SignIn(){ 
    const [signInSuccess, setSignInSuccess] = useState(null); 
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    function doSignIn(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignInSuccess(`Sign In Successful!`);
            })
            .catch((error) => {
               setSignInSuccess(`Sign In Failed: ${error.message}`)
            });
        }
    function doSignOut() {
        signOut(auth)
            .then(() => {
                setSignOutSuccess(`Sign Out Successful!`);
            })
            .catch((error) => {
                setSignOutSuccess(`Sign Out Failed: ${error.message}`);
            });
        }
  return (
    <>
    <h2>Sign In</h2>
    <form onSubmit={doSignIn}>
    <label htmlFor="email">Email</label>
    <input
        type='email'
        id="email"
        name='email'
        placeholder='Email'
    />
    <br />
    <label>Password</label>
    <input
        type='password'
        id="password"
        name='password'
        placeholder='Password'
    />
    <br />
    <button type='submit'>Sign In</button>
    </form>
    <button onClick={doSignOut}>Sign Out</button>
    </>
  );
}

export default SignIn