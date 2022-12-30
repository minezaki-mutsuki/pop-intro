import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Button } from "../../uiParts/button";
import { EventsList } from "../../uiParts/eventsList";
import { ButtonWrapper, Wrapper } from "./style";

type EventsListItems = {
    day: string;
    explanation: string;
}

type EventsProps = {
    eventsList: EventsListItems[];
}

export const EventsLayout = ({eventsList}: EventsProps) => {
    const onClickToTop = () => {
        console.log("トップに遷移");
        //TODO : useNavigate使いたい
    };

    return (
        <Wrapper>
            < Header/>
            <EventsList items={eventsList} />
            <ButtonWrapper>
                <Button text={"トップに戻る"} onClick={onClickToTop} />
            </ButtonWrapper>
            <Footer />
        </Wrapper>
    );
}
