import React from 'react';
import useAuthState from '../hooks/authState';

function UserLanding() {
    const user = useAuthState();

    if (user === null) {
        
        return (
        <>
            <h2>You must be signed in to view this page.</h2>
        </>
        );
    }
    return (
      `Welcome ${user.email}!`
    );
}

export default UserLanding;