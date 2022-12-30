import { useState } from "react";
import { Sidebar } from "../sidebar";
import { Container, Line, Menu, Wrapper, ButtonWrapper } from "./style";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <ButtonWrapper isOpen={isOpen}>
        <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Container>
      </ButtonWrapper>
      <nav>
        <Menu isOpen={isOpen}>
          <Sidebar />
        </Menu>
      </nav>
    </Wrapper>
  );
};