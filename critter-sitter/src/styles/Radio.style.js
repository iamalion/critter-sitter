import styled from "styled-components";

export const RadioLabel = styled.label`
    display: inline-block;
    position: relative;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #FFB6C1;
    background-color: #FFB6C1;
    margin-right: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    transition: background-color 0.2s ease;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #FF69B4;
        transform: scale(1.05);
    }
    
    input[type="radio"]:checked {
        background-color: #FF69B4;
    }
  
`;

export const RadioButton = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    user-select: none;
    &:checked + span {
        background-color: #FF69B4;
    }
`;