import LogoImg  from "./logo.png"
import { LogoTitle, LogoWrapper, StyledImg } from "./style";

export const Logo = () => {
    return (
        <LogoWrapper>
            <StyledImg src={LogoImg} />
            <LogoTitle>軽音POP</LogoTitle>
        </LogoWrapper>
    );
}
