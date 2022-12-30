import { useNavigate } from "react-router-dom";
import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Button } from "../../uiParts/button";
import { ButtonWrapper, LiveDay, Wrapper } from "./style";

type LiveItems = {
    day: string;
    link: string;
    name: string;
}

type LiveProps = {
    liveList: LiveItems[];
}

export const LiveLayout = ({liveList}: LiveProps) => {
    const navigate = useNavigate();
    const onClickToTop = () => {
        navigate("/");
    };

    return (
        <Wrapper>
            <Header choice={false} />
            <div>
            {liveList.map((item, index) => (
                <>
                <LiveDay key={index}>{item.day}</LiveDay>                    
                <a href={item.link}>
                    <Button text={item.name} onClick={() => console.log(item.link)} />
                </a>
                </>
            ))}
            </div>
            <ButtonWrapper>
                <Button text={"トップに戻る"} onClick={onClickToTop} />
            </ButtonWrapper>
            <Footer choice={false} />
        </Wrapper>
    );
};
