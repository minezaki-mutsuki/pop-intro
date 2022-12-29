import styled from "styled-components";

export const Wrapper = styled.div`
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
    padding: 20px;
    font-family: sans-serif;
    background-color: #0E0841;
    border-radius: 50px;
    cursor: pointer;
    transition: ease 0.2s;
    &:hover {
        background-color: #3B3571;
    }
    &:active {
        background-color: #2C2855;
    }
`;
export const Qestion = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const Qtext = styled.p`
    color: white;
    margin: 0;
    padding: 5px;
    width: 225px;
`;
export const Atext = styled.p`
    margin: 5px 20px;
    padding: 10px 20px;
    background-color: white;
    text-align: center;
    border-radius: 50px;
`;
