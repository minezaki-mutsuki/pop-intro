import { useNavigate } from "react-router-dom";
import LogoImg  from "./logo.png"
import { LogoTitle, LogoWrapper, StyledImg } from "./style";

export const Logo = () => {
    const navigate = useNavigate();
    return (
        <LogoWrapper onClick={() => navigate("/") }>
            <StyledImg src={LogoImg} />
            <LogoTitle>軽音POP</LogoTitle>
        </LogoWrapper>
    );
}
