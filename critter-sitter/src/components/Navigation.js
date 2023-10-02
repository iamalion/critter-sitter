import React, { useState } from 'react';
import useAuthState from '../hooks/authState';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { NavBar, NavLinks, NavLink, Logo } from '../styles/Navigation.style';
import { SmallButton } from '../styles/Button.style';
import { UserInfoContainer, UserInfoText, SignOutButton } from '../styles/UserInfo.style';

function Navigation() {
    const user = useAuthState();
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    const navigate = useNavigate();
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
                    <NavLink href="/">Splash</NavLink>
                    <NavLink href="/home">Home</NavLink>
                    {/* <NavLink href="/view">View</NavLink> */}
                    <NavLink href="/add">Add New Pet</NavLink>
                </NavLinks>
            </NavBar>
            <UserInfoContainer>
                <UserInfoText>Signed in as {user.email}</UserInfoText>
                <SmallButton onclick={doSignOut}>Sign Out</SmallButton>
            </UserInfoContainer>
            
        </>
    );
}

export default Navigation;
