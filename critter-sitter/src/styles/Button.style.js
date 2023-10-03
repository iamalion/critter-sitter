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
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
`;

export const SmallButton = styled.button`
    /* width: 100%; */
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #FFB6C1;
    font-size: 12px;
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

export const NextButton = styled.button`
    text-align: center;
    color: #FFB6C1;
    border: none;
    background-color: #FFFFFF;
    font-size: 50px;
    cursor: pointer;

`;

export const BackButton = styled.button`
    text-align: center;
    color: #FFB6C1;
    border: none;
    background-color: #FFFFFF;
    font-size: 50px;
    cursor: pointer;
`;

export const SubmitButton = styled.button`
    text-align: center;
    color: #FFB6C1;
    border: none;
    background-color: #FFFFFF;
    font-size: 50px;
    cursor: pointer;
`;
 
