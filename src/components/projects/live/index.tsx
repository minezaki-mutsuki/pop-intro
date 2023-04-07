import { useNavigate } from "react-router-dom";
import { Button } from "../../uiParts/button";
import { Title } from "../../uiParts/title";
import { LiveText, Wrapper } from "./style";
import { useCurrentUser } from "../../../useCurrentUser";

export const Live = () => {
  const navigate = useNavigate();
  const user = useCurrentUser();

  return (
    <Wrapper>
      <Title title={"Live"} />
      <LiveText>
        過去のライブ動画を閲覧できます。
        <br />
        {!user && "ログインしてください"}
      </LiveText>
      <Button
        text={"過去のライブ"}
        onClick={() => (user ? navigate("/live") : navigate("/login"))}
      />
    </Wrapper>
  );
};
