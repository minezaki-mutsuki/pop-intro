import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
`;

export const ButtonWrapper = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    `
    position: fixed;
  `}
  z-index: 99;
`;

export const Line = styled.div`
  width: 40px;
  height: 4px;
  margin: 0 auto;
  border-radius: 12px;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const Container = styled.button<{ isOpen: boolean }>`
  width: 56px;
  height: 56px;
  padding: 0;
  margin: 18.5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  transition: 0.5s;
  background-color: transparent;
  &:hover {
    background-color: ${({isOpen}) => isOpen ? "#828282" : "#33333333" };
  }
  border: none;
  ${Line} {
    :first-child {
      transform: ${({ isOpen }) =>
        isOpen ? `translateY(10px) rotate(-45deg)` : "rotate(0)"};
    }
    :nth-child(2) {
      margin: 6px auto;
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    :last-child {
      transform: ${({ isOpen }) =>
        isOpen ? `translateY(-10px) rotate(45deg)` : "rotate(0)"};
    }
    background-color: ${({ isOpen }) =>
      isOpen ? `white;` : `black;`};
  }
`;

export const Menu = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 100px 0 0 0;
  background-color: black;
  width: 345px;
  height: 100%;
  transition: 0.5s;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(40%)` : "translateX(100%)"};
  @media screen and (min-width: 300px) {
    transform: ${({ isOpen }) =>
    isOpen ? `translateX(70%)` : "translateX(200%)"};
  };
  @media screen and (min-width: 700px) {
    transform: ${({ isOpen }) =>
    isOpen ? `translateX(150%)` : "translateX(300%)"};
  };
  @media screen and (min-width: 900px) {
    transform: ${({ isOpen }) =>
    isOpen ? `translateX(200%)` : "translateX(400%)"};
  };
  @media screen and (min-width: 1100px) {
    transform: ${({ isOpen }) =>
    isOpen ? `translateX(300%)` : "translateX(500%)"};
  };
  & a {
    text-decoration: none;
  }
`;