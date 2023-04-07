import { useNavigate } from "react-router-dom";
import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Button } from "../../uiParts/button";
import { QaButton } from "../../uiParts/qaButton";
import { BodyWrapper, ButtonWrapper, Wrapper } from "./style";

type QandAItems = {
  qestion: string;
  answer: string;
};

type QandAProps = {
  qAndAList: QandAItems[];
};

export const QandALayout = ({ qAndAList }: QandAProps) => {
  const navigate = useNavigate();
  const onClickToTop = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Header choice={false} />
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
      <Footer choice={false} />
    </Wrapper>
  );
};
