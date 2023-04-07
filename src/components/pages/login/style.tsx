import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-family: sans-serif;
  padding: 10px 20px;
  width: 200px;
  height: 37px;
  border: solid 2px #0e0841;
  border-radius: 50px;
`;
export const BodyWrapper = styled.div`
  @media screen and (min-width: 650px) {
    padding: 90px 30px;
  }
  padding: 160px 30px;
  display: grid;
  gap: 25px;
  justify-items: center;
`;
export const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-family: sans-serif;
  width: 240px;
  height: 57px;
  color: white;
  background-color: #0e0841;
  border: none;
  border-radius: 50px;
  margin: 0;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background-color: #3b3571;
  }
  &:active {
    background-color: #2c2855;
  }
`;
export const ErrorText = styled.p`
  margin: 0;
  color: red;
  font-weight: 700;
`;
export const InputWrapper = styled.div`
  display: grid;
  gap: 15px;
  @media screen and (min-width: 650px) {
    display: flex;
  }
`;
