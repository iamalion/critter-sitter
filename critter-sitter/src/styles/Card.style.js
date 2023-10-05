import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #FFB6C1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    box-shadow: 5px 5px 5px lightgray;
    cursor: pointer;
`

export const SmallCard = styled.div`
    border: 1px solid #FFB6C1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    align-items: flex-start;
    /* justify-content: space-evenly; */
    box-shadow: 5px 5px 5px lightgray;
    cursor: pointer;
`