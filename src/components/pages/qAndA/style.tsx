import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  padding-top: 50px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
`;
export const BodyWrapper = styled.div`
  display: grid;
  gap: 30px;
  @media screen and (min-width: 650px) {
    padding: 30px;
  }
  padding: 90px 30px;
`;
export const PostButton = styled.button`
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
export const StyledTextarea = styled.textarea`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-family: sans-serif;
  padding: 10px 20px;
  width: 60%;
  height: 120px;
  border: solid 2px #0e0841;
  border-radius: 50px;
  resize: none;
`;
export const PostWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  justify-items: center;
`;
export const ModalText = styled.p`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border: 5px black solid;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
`;
