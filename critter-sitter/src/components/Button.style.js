import styled from 'styled-components';

export const Button = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #FFB6C1;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 10px;
    cursor: pointer;
    &:hover {
        background-color: #FF69B4;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
 
