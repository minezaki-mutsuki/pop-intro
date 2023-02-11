import { Button } from "../../uiParts/button";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, Wrapper } from "./style";

export const Contact = () => {

    return (
        <Wrapper>
            <Title title={"Contact"} />
            <ButtonWrapper>
                <a href="https://line.me/R/ti/p/@892mfqno">
                    <Button text={"公式LINE"} onClick={() => console.log("LINE")} />
                </a>
                <a href="https://instagram.com/k_on.pop?igshid=YmMyMTA2M2Y=">
                    <Button text={"Instagram"} onClick={() => console.log("Instagram")} />
                </a>
                <a href="https://twitter.com/POP55140183?t=vgPzFMejyQb03fiw1MEMPw&s=09">
                    <Button text={"Twitter"} onClick={() => console.log("Twitter")} />
                </a>
            </ButtonWrapper>
        </Wrapper>
    );
}
