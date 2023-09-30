import React from 'react';
import useAuthState from '../hooks/authState';
import { NavBar, NavLinks, Logo } from '../styles/Navigation.style';

function Navigation() {
    const user = useAuthState();

    if (user === null) {
        return (
            <NavBar>
                <Logo className="someText">Critter Sitter</Logo>
                    <NavLinks>
                        <a href="/sign-up">Sign up</a>
                        <a href="/sign-in">Sign in</a>
                        <hr />
                    </NavLinks>
            </NavBar>
        );
    }

    return (
        <>
        <NavBar>
            <Logo>Critter Sitter</Logo>
                <NavLinks>
                    <a href="/">Splash</a>
                    <a href="/home">Home</a>
                    <a href="/view">View</a>
                    <a href="/add">Add</a>
                </NavLinks>
            </NavBar>
            <p>Signed in as {user.email}</p>
        </>
    );
}

export default Navigation;
