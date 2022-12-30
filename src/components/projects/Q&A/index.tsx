import { useNavigate } from "react-router-dom";
import { Button } from "../../uiParts/button";
import { QaButton } from "../../uiParts/qaButton";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, QandAWrapper, Wrapper } from "./style";

type QandAItems = {
    qestion: string;
    answer: string;
}

type QandAProps = {
    QandA: QandAItems[];
}

export const QandA = ({ QandA }: QandAProps) => {
    const navigate = useNavigate();
    const onClickToQandA = () => {
        navigate("/qanda");
    }

    return (
        <Wrapper>
            <Title title={"Q&A"} />
            <QandAWrapper>
                {QandA.map((items, index) => (
                    <QaButton key={index} {...items} />
                ))}
            </QandAWrapper>
            <ButtonWrapper>
                <Button text={"Q&A一覧"} onClick={onClickToQandA} />
            </ButtonWrapper>
        </Wrapper>
    );
}
