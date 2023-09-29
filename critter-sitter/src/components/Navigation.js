import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate(); 
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    const [displayName, setDisplayName] = useState(null);

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setDisplayName(user.displayName);
    //             console.log("User is: ", user.displayName)
    //         } else {
    //             setDisplayName(null);
    //             console.log("User is null");
    //         }
    //     });

    //     return () => {
           
    //         unsubscribe();
    //     };
    // }, []);

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
    
    if (auth.currentUser === null) {
   
        return (
        <>
            <h1>Critter Sitter</h1>
            <nav>
                <hr />
            </nav>
        </>
        );
    }

    return (
        <>
            <h1>Critter Sitter</h1>
            <nav>
                {displayName !== null && <p>Welcome {displayName}!</p>} 
                <a href="/home">Home</a>
                <a href="/add">Add New Pet</a>
                <button onClick={doSignOut}>Sign Out</button>
                <p>{signOutSuccess}</p> 
                <hr />
            </nav>
        </>
        );
    }

export default Navigation;