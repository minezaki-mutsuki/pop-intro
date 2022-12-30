import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import { MenuText, Wrapper } from "./style";

type SidebarProps = {
    choice?: boolean;
}

export const Sidebar = ({choice}: SidebarProps) => {

    const TopSidebar = (
        <>    
            <AnchorLink href="#top">
                <MenuText>Top</MenuText>
            </AnchorLink>
            <AnchorLink href="#about">
                <MenuText>About</MenuText>
            </AnchorLink>
            <AnchorLink href="#events">
                <MenuText>Events</MenuText>
            </AnchorLink>
            <AnchorLink href="#live">
                <MenuText>Live</MenuText>
            </AnchorLink>
            <AnchorLink href="#qanda">
                <MenuText>Q&A</MenuText>
            </AnchorLink>
            <AnchorLink href="#contact">
                <MenuText>Contact</MenuText>
            </AnchorLink>
        </>
    );

    const navigate = useNavigate();

    const notTopSidebar = (
        <>    
            <MenuText onClick={() => navigate("/")}>Top</MenuText>
            <MenuText onClick={() => navigate("/")}>About</MenuText>
            <MenuText onClick={() => navigate("/")}>Events</MenuText>
            <MenuText onClick={() => navigate("/")}>Live</MenuText>
            <MenuText onClick={() => navigate("/")}>Q&A</MenuText>
            <MenuText onClick={() => navigate("/")}>Contact</MenuText>
        </>
    );

    return (
        <Wrapper>
            {choice ? TopSidebar : notTopSidebar}
        </Wrapper>
    );
}
