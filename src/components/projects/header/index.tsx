import { useNavigate } from "react-router-dom";
import { Button } from "../../uiParts/button";
import { Logo } from "../../uiParts/logo";
import { HamburgerMenu } from "./hambergarMenu";
import { ButtonWrapper, Wrapper } from "./style";
import { auth } from "../../../firebase-config";
import { useCurrentUser } from "../../../useCurrentUser";

type HeaderProps = {
  choice?: boolean;
};

export const Header = ({ choice }: HeaderProps) => {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <Logo />
        <Button
          text={user ? "ログアウト" : "ログイン"}
          onClick={() => (user ? onLogout() : navigate("/login"))}
        />
      </ButtonWrapper>
      <HamburgerMenu choice={choice} />
    </Wrapper>
  );
};
