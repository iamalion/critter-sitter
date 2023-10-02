import styled from "styled-components";

export const AvatarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
`

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 20px;
    
`;

export const AvatarName = styled.h3`
    font-family: 'Luckiest Guy', cursive;
    margin: 0;
    font-size: 30px;
    letter-spacing: 2px;

`;
export const AvatarButton = styled.button`
    border-radius: 50%;
    border: none;
    background-color: #FFB6C1;
    padding: 0;
    margin: 5px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: #FF69B4;
    }
    &:active {
        background-color: #FF69B4;
        transform: scale(.95);
    
    }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: auto;
`;