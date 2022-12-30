import { Logo } from "../../uiParts/logo";
import { HamburgerMenu } from "./hambergarMenu";
import { Wrapper } from "./style";

export const Header = () => {

    return (
        <Wrapper>
            <Logo />
            <HamburgerMenu />
        </Wrapper>
    );
}
