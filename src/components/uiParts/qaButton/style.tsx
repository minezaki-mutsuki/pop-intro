import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  max-width: 600px;
  padding: 20px;
  font-family: sans-serif;
  background-color: #0e0841;
  border-radius: 50px;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background-color: #3b3571;
  }
  &:active {
    background-color: #2c2855;
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
export const StyledTextarea = styled.textarea`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-family: sans-serif;
  padding: 10px 20px;
  width: 180px;
  height: 120px;
  border: solid 2px #0e0841;
  border-radius: 50px;
  resize: none;
  &:focus-visible {
    outline: none;
  }
  @media screen and (min-width: 650px) {
    width: 60%;
  }
`;
export const PostButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  font-family: sans-serif;
  width: 180px;
  height: 57px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 50px;
  margin: 0;
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background-color: #0e0841;
  }
  &:active {
    background-color: #0e0841;
  }
`;
export const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;
export const ButtonWrapper = styled.div`
  display: grid;
  gap: 5px;
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
