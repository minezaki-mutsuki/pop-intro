import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff99;
  border-bottom: solid 1px white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;
export const ButtonWrapper = styled.div`
  display: grid;
  @media screen and (min-width: 650px) {
    display: flex;
    align-items: center;
  }
  gap: 15px;
  button {
    background-color: black;
  }
`;
