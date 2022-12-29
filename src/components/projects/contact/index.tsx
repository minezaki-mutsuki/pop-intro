import { Button } from "../../uiParts/button";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, Wrapper } from "./style";

export const Contact = () => {
    const onClickToLine = () => {
        console.log("ラインに遷移");
        //TODO : useNavigate使いたい
    };
    const onClickToInstagram = () => {
        console.log("インスタに遷移");
        //TODO : useNavigate使いたい
    };
    const onClickToTwitter = () => {
        console.log("ツイッターに遷移");
        //TODO : useNavigate使いたい
    };

    return (
        <Wrapper>
            <Title title={"Contact"} />
            <ButtonWrapper>
                <Button text={"公式LINE"} onClick={onClickToLine} />
                <Button text={"Instagram"} onClick={onClickToInstagram} />
                <Button text={"Twitter"} onClick={onClickToTwitter} />
            </ButtonWrapper>
        </Wrapper>
    );
}
