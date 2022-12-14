import styled from "styled-components";

export const ListWrapper = styled.div`
    
`;
export const TitleText = styled.p`
    width: 25%;
    margin: 0;
    border-right: solid 1px #0E0841;
    padding: 10px;
    font-weight: 700;
    color: #0E0841;
`;
export const ExplanationText = styled.p`
    width: 75%;
    color: #0E0841;
    margin: 0;
    padding: 10px;
`;
export const Wrapper = styled.div`
    max-width: 600px;
    display: flex;
    border: solid 5px #0E0841;
    border-bottom: none;
    border-top: none;
    &:nth-child(2n+1) {
        background-color: #0E0841;
        ${TitleText} {
            color: white;
        };
        ${ExplanationText} {
            color: white;
        };
    }
    &:first-child {
        border-top: solid 5px #0E0841;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    &:last-child {
        border-bottom: solid 5px #0E0841;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;
