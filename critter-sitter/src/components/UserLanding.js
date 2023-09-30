import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";

function UserLanding() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }
    , []);

    if (user === null) {
        
        return (
        <>
            <h2>You must be signed in to view this page.</h2>
            <Link to="/sign-in">Sign In</Link>
        </>
        );
    }
    return (
      `Welcome ${user.email}!`
    );
}

export default UserLanding;