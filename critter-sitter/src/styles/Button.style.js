import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #FFB6C1;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: #FF69B4;
    }
    &:active {
        background-color: #FF69B4;
        transform: scale(.95);
    
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
 
