import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button.style.js";
import { Container, Form, CommonInput } from "../styles/Container.style.js";

function SignIn(){ 
    const navigate = useNavigate();
    const [signInSuccess, setSignInSuccess] = useState(null); 
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    function doSignIn(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                setSignInSuccess(`Sign In Successful! Welcome ${userCredential.user.email}`);
                navigate("/home");
            })
            .catch((error) => {
               setSignInSuccess(`Sign In Failed: ${error.message}`)
            });
        }
    function doSignOut() {
        signOut(auth)
            .then(() => {
                setSignOutSuccess(`Sign Out Successful!`);
                navigate("/");
            })
            .catch((error) => {
                setSignOutSuccess(`Sign Out Failed: ${error.message}`);
            });
        }
  return (
    <>
    <Container>
    <h2>Sign In</h2>

    <Form onSubmit={doSignIn}>
    <label htmlFor="email">Email</label>
    
    <CommonInput
        type='email'
        id="email"
        name='email'
        placeholder='Email'
    />
    <br />
    <label>Password</label>
    <CommonInput
        type='password'
        id="password"
        name='password'
        placeholder='Password'
    />
    <br />
    <Button type='submit'>Sign In</Button>
    </Form>
    {signInSuccess}
   
    </Container>
    </>
  );
}

export default SignIn