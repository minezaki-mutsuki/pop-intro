import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    font-family: sans-serif;
    width: 240px;
    height: 57px;
    color: white;
    background-color: #0E0841;
    border: none;
    border-radius: 50px;
    margin: 0;
    cursor: pointer;
    transition: ease 0.2s;
    &:hover {
        background-color: #3B3571;
    }
    &:active {
        background-color: #2C2855;
    }
`;
