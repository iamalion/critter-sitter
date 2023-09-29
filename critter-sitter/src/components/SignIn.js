import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn(){ 
    const navigate = useNavigate();
    const [signInSuccess, setSignInSuccess] = useState(null); 
    function doSignIn(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignInSuccess(`Sign In Successful!`);
                navigate("/home");
            })
            .catch((error) => {
               setSignInSuccess(`Sign In Failed: ${error.message}`)
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
    <p>{signInSuccess}</p>
    
    </>
  );
}

export default SignIn