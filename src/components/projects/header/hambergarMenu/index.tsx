import { useState } from "react";
import { Sidebar } from "../sidebar";
import { Container, Line, Menu, Wrapper, ButtonWrapper } from "./style";

type HamburgerMenuProps = {
  choice?: boolean;
};

export const HamburgerMenu = ({ choice }: HamburgerMenuProps) => {
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
          <Sidebar choice={choice} />
        </Menu>
      </nav>
    </Wrapper>
  );
};
