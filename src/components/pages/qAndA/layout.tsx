import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Button } from "../../uiParts/button";
import { QaButton } from "../../uiParts/qaButton";
import { BodyWrapper, ButtonWrapper, Wrapper } from "./style";

type QandAItems = {
    qestion: string;
    answer: string;
}

type QandAProps = {
    qAndAList: QandAItems[];
}

export const QandALayout = ({qAndAList}: QandAProps) => {
    const onClickToTop = () => {
        console.log("トップに遷移");
        //TODO : useNavigate使いたい
    };

    return (
        <Wrapper>
            <Header />
            <BodyWrapper>
                {qAndAList.map((item, index) => (
                    <>                 
                        <QaButton key={index} qestion={item.qestion} answer={item.answer} />
                    </>
                ))}
            </BodyWrapper>
            <ButtonWrapper>
                <Button text={"トップに戻る"} onClick={onClickToTop} />
            </ButtonWrapper>
            <Footer />
        </Wrapper>
    );
}
