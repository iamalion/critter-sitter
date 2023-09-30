import React from 'react';
// import { auth } from '../firebase';
import useAuthState from '../hooks/authState';

function Navigation() {
    const user = useAuthState();

    if (user === null) {
        return (
            <>
                <h1>Critter Sitter</h1>
                <nav>
                    <a href="/sign-up">Sign up</a>
                    <a href="/sign-in">Sign in</a>
                    <hr />
                </nav>
            </>
        );
    }

    return (
        <>
            <h1>Critter Sitter</h1>
            <nav>
                <a href="/">Splash</a>
                <a href="/home">Home</a>
                <a href="/view">View</a>
                <a href="/add">Add</a>
                <hr />
            </nav>
        </>
    );
}

export default Navigation;
