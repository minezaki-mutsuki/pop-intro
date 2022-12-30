import styled from "styled-components";

export const ListWrapper = styled.div`
    max-width: 600px;
    border-radius: 12px;
`;
export const DayText = styled.time`
    font-size: 12px;
    color: #645ABE;
    font-weight: 700;
`;
export const ExplanationText = styled.p`
    margin: 0;
    font-weight: 700;
    color: #0E0841;
`;
export const Wrapper = styled.div`
    display: grid;
    gap: 10px;
    padding: 10px 20px;
    border-right: solid 5px #0E0841;
    border-left: solid 5px #0E0841;
    &:nth-child(2n+1) {
        background-color: #0E0841;
        ${ExplanationText} {
            color: white;
        };
        ${DayText} {
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
