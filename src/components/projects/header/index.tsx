import { Logo } from "../../uiParts/logo";
import { HamburgerMenu } from "./hambergarMenu";
import { Wrapper } from "./style";

type HeaderProps = {
    choice?: boolean;
}

export const Header = ({choice}: HeaderProps) => {

    return (
        <Wrapper>
            <Logo />
            <HamburgerMenu choice={choice} />
        </Wrapper>
    );
}
