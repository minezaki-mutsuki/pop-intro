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
    const onClickToTop = () => {
        console.log("トップに遷移");
        //TODO : useNavigate使いたい
    };

    return (
        <Wrapper>
            < Header/>
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
            <Footer />
        </Wrapper>
    );
}
