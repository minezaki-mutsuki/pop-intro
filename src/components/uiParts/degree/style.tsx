import styled, { css } from "styled-components";

export const TitleText = styled.h2`
    font-size: 30px;
    line-height: 57px;
    font-family: serif;
    margin: 0 0 10px;
    color: #0E0841;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;
export const StyledText = styled.span`
    color: #0E0841;
    font-weight: 600;
    font-family: sans-serif;
`;
export const StyledIcon = styled.span<{ degree: number, textWidth: number }>`
    position: absolute;
    color: #FFEF42;
    font-size: 35px;
    left: 0;
    margin-left: ${({ textWidth, degree }) => textWidth - 6 + degree}px;
    z-index: 3;
`;
export const Separator = styled.hr`
    border-style: solid;
    border-color: #0E0841;
    height: 1px;
    width: 202px;
    border-width: 4px 0 0 0;
    margin: 0 10px;
    border-radius: 50px;
`;
export const Scale = styled.span<{ position: number, textWidth: number }>`
    color: #0E0841;
    font-weight: 1000;
    position: absolute;
    margin-left: ${({ textWidth }) => textWidth + 7}px;
    ${({ position }) => 
        position === 1
        ? css`
            left: 0px;
        `: position === 2
        ? css`
          left: 50px;
        `: position === 3
        ? css`
            left: 100px;
        `: position === 4
        ? css`
            left: 150px;
        `: css`
            left: 200px;
        `
    }
`;
