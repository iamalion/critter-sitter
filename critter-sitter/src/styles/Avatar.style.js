import styled from "styled-components";

export const AvatarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const AvatarOption = styled.label`
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 50%;
        border: 2px solid transparent
        transition: border-color 0.2s ease-in-out;
        ${props => props.selected && `
            border-color: #FF69B4;
        `}
        &:hover {
            border-color: #FF69B4;
            transform: scale(1.05);
        }
    }
    input[type="radio"]:checked + img {
        border: 2px solid #FF69B4;
        background-color: #FFB6C1;
        border-width: 3px;
    }

    input[type="radio"] {
        display: none;
    }
`;

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
    font-family: 'Luckiest Guy', cursive;;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;

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