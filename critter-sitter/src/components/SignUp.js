import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "../styles/Button.style.js";
import { CommonInput, Container, Form } from "../styles/Container.style.js";

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
        <Container>
        <h2>Sign Up</h2>
        
        <Form onSubmit={doSignUp}>
        <label htmlFor="email">Email</label>
        
            <CommonInput
                type='text'
                id="email"
                name='email'
                placeholder='Email'
                onChange={clearPasswordMatchError} 
            />
            
            <label>Password</label>
            <CommonInput
                type='password'
                id="password"
                name='password'
                placeholder='Password'
                onChange={clearPasswordMatchError}  
            />
            <label>Confirm Password</label>
            <CommonInput
                type='password'
                id="confirmPassword"
                name='confirmPassword'
                placeholder='Confirm Password'
                onChange={clearPasswordMatchError} 
            />
            
            <Button type='submit'>Sign Up</Button>
            <p>{signUpSuccess}</p>
            <p style={{color: "red"}}>{passwordMatchError}</p>
        </Form>
        </Container>
        </>
    );
}

export default SignUp