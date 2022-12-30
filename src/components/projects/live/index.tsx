import { useRef, useState } from "react";
import { Button } from "../../uiParts/button";
import { Input } from "../../uiParts/input";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, ErrorText, LiveText, Wrapper } from "./style";

export const Live = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [showError, setShowError] = useState(false);
    const onClickToLive = () => {
        if (ref.current?.value === "pop2023") {
            setShowError(false);
            console.log("ライブ一覧に遷移");
            //TODO : useNavigate使いたい
        } else {
            setShowError(true);
        };
    };

    return (
        <Wrapper>
            <Title title={"Live"} />
            <LiveText>過去のライブ動画を閲覧できます。<br/>パスワードを入力してください。</LiveText>
            <ButtonWrapper>
                <Input ref={ref} />
                <Button text={"過去のライブ"} onClick={onClickToLive} />
            </ButtonWrapper>
            {showError && <ErrorText>パスワードが間違っています。</ErrorText>}
        </Wrapper>
    );
}
