import React from 'react';

function Navigation() {
    return (
        <>
            <h1>Critter Sitter</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/view">View</a>
                <a href="/add">Add</a>
                <a href ="/sign-in">Sign In</a>
                <a href ="/sign-up">Sign Up</a>
            </nav>
        </>
    );
}

export default Navigation;