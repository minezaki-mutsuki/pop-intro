import { FooterText, IconWrapper, MenuWrapper, StyledLink, StyledMenu, Wrapper } from "./style";
import { IconContext } from "react-icons"
import {BsChatDotsFill, BsInstagram, BsTwitter } from "react-icons/bs"

export const Footer = () => {

    return (
        <Wrapper>
            <MenuWrapper>
                <StyledMenu>Top</StyledMenu>
                <StyledMenu>About</StyledMenu>
                <StyledMenu>Events</StyledMenu>
                <StyledMenu>Live</StyledMenu>
                <StyledMenu>Q&A</StyledMenu>
                <StyledMenu>Contact</StyledMenu>
            </MenuWrapper>
            <IconWrapper>
                <StyledLink href="https://liff.line.me/1645278921-kWRPP32q/?accountId=132apjhn">
                    <IconContext.Provider value={{ color: "black", size: "20px" }}>
                        <BsChatDotsFill />
                    </IconContext.Provider>
                </StyledLink>
                <StyledLink href="https://instagram.com/k_on.pop?igshid=YmMyMTA2M2Y=">
                    <IconContext.Provider value={{ color: "black", size: "20px" }}>
                        <BsInstagram />
                    </IconContext.Provider>
                </StyledLink>
                <StyledLink href="https://twitter.com/POP55140183?t=vgPzFMejyQb03fiw1MEMPw&s=09">
                    <IconContext.Provider value={{ color: "black", size: "20px" }}>
                        <BsTwitter />
                    </IconContext.Provider>
                </StyledLink>
            </IconWrapper>
            <FooterText>©2022 軽音POP. All rights Reserved</FooterText>
        </Wrapper>
    );
}
