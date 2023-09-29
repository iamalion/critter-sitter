import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";

function UserLanding() {
    if (auth.currentUser === null) {
        console.log("the user is: " + auth.currentUser)
        
        return (
        <>
            <h2>You must be signed in to view this page.</h2>
            <Link to="/sign-in">Sign In</Link>
        </>
        );
    }
    return (
      <h2>Welcome!</h2>
    );
}

export default UserLanding;