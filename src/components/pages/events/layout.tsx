import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const onClickToTop = () => {
        navigate("/");
    };

    return (
        <Wrapper>
            <Header choice={false} />
            <EventsList items={eventsList} />
            <ButtonWrapper>
                <Button text={"トップに戻る"} onClick={onClickToTop} />
            </ButtonWrapper>
            <Footer choice={false} />
        </Wrapper>
    );
};
