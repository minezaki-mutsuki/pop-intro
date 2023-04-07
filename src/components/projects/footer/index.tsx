import {
  FooterText,
  IconWrapper,
  MenuWrapper,
  StyledLink,
  StyledMenu,
  Wrapper,
} from "./style";
import { IconContext } from "react-icons";
import { BsChatDotsFill, BsInstagram, BsTwitter } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

type FooterProps = {
  choice?: boolean;
};

export const Footer = ({ choice }: FooterProps) => {
  const TopMenu = (
    <>
      <AnchorLink href="#top" style={{ textDecoration: "none" }}>
        <StyledMenu>Top</StyledMenu>
      </AnchorLink>
      <AnchorLink href="#about" style={{ textDecoration: "none" }}>
        <StyledMenu>About</StyledMenu>
      </AnchorLink>
      <AnchorLink href="#events" style={{ textDecoration: "none" }}>
        <StyledMenu>Events</StyledMenu>
      </AnchorLink>
      <AnchorLink href="#live" style={{ textDecoration: "none" }}>
        <StyledMenu>Live</StyledMenu>
      </AnchorLink>
      <AnchorLink href="#qanda" style={{ textDecoration: "none" }}>
        <StyledMenu>Q&A</StyledMenu>
      </AnchorLink>
      <AnchorLink href="#contact" style={{ textDecoration: "none" }}>
        <StyledMenu>Contact</StyledMenu>
      </AnchorLink>
    </>
  );

  const navigate = useNavigate();

  const notTopMenu = (
    <>
      <StyledMenu onClick={() => navigate("/")}>Top</StyledMenu>
      <StyledMenu onClick={() => navigate("/")}>About</StyledMenu>
      <StyledMenu onClick={() => navigate("/")}>Events</StyledMenu>
      <StyledMenu onClick={() => navigate("/")}>Live</StyledMenu>
      <StyledMenu onClick={() => navigate("/")}>Q&A</StyledMenu>
      <StyledMenu onClick={() => navigate("/")}>Contact</StyledMenu>
    </>
  );

  return (
    <Wrapper>
      <MenuWrapper>{choice ? TopMenu : notTopMenu}</MenuWrapper>
      <IconWrapper>
        <StyledLink href="https://line.me/R/ti/p/@892mfqno">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <BsChatDotsFill />
          </IconContext.Provider>
        </StyledLink>
        <StyledLink href="https://instagram.com/k_on.pop?igshid=YmMyMTA2M2Y=">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <BsInstagram />
          </IconContext.Provider>
        </StyledLink>
        <StyledLink href="https://twitter.com/POP55140183?t=vgPzFMejyQb03fiw1MEMPw&s=09">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <BsTwitter />
          </IconContext.Provider>
        </StyledLink>
      </IconWrapper>
      <FooterText>©2023 軽音POP. All rights Reserved</FooterText>
    </Wrapper>
  );
};
