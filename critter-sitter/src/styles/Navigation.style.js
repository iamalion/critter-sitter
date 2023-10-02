import styled from 'styled-components';

export const NavBar = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 20px;
   background-color: #FFB6C1;
   color: #FFFFFF;
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    
`;

export const NavLink = styled.a`
    padding: 10px 20px;
    text-decoration: none;
    background-color: #FFB6C1;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #FF69B4;
    }
    `


export const Logo = styled.h1`
margin: 0; 
font-family: 'Luckiest Guy', cursive;
font
`
