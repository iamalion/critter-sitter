import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp(){
    const navigate = useNavigate();
    const [signUpSuccess, setSignUpSuccess] = useState(null);
    const [passwordMatchError, setPasswordMatchError] = useState(null);
    function doSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords do not match");
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.confirmPassword.value = "";    
        } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignUpSuccess(`Sign Up Successful!`);
                navigate("/home");
            })
            .catch((error) => {
               setSignUpSuccess(`Sign Up Failed: ${error.message}`)
            });
        }
    }
    function clearPasswordMatchError() {
        setPasswordMatchError(null);
      }

    return (
        <>
        <h2>Sign Up</h2>
        
        <form onSubmit={doSignUp}>
        <label htmlFor="email">Email</label>
        
            <input
                type='text'
                id="email"
                name='email'
                placeholder='Email'
                onChange={clearPasswordMatchError} 
            />
            <br />
            <label>Password</label>
            <input
                type='password'
                id="password"
                name='password'
                placeholder='Password'
                onChange={clearPasswordMatchError}  
            />
            <label>Confirm Password</label>
            <input
                type='password'
                id="confirmPassword"
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={clearPasswordMatchError} 
            />
            
            <button type='submit'>Sign Up</button>
            <p>{signUpSuccess}</p>
            <p style={{color: "red"}}>{passwordMatchError}</p>
        </form>
        </>
    );
}

export default SignUp