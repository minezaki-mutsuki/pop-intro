import styled from "styled-components";

export const ListWrapper = styled.div`
    
`;
export const Wrapper = styled.div`
    max-width: 600px;
    display: flex;
    border: solid 1px #E0E0E0;
    border-bottom: none;
    &:nth-child(2n+1) {
        background-color: #EFEFEF;
    }
    &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    &:last-child {
        border-bottom: solid 1px #E0E0E0;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;
export const TitleText = styled.p`
    width: 25%;
    margin: 0;
    border-right: solid 1px #E0E0E0;
    padding: 10px;
`;
export const ExplanationText = styled.p`
    width: 75%;
    margin: 0;
    padding: 10px;
`;
