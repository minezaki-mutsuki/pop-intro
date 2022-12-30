import { useNavigate } from "react-router-dom";
import { Button } from "../../uiParts/button";
import { EventsList } from "../../uiParts/eventsList";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, Wrapper } from "./style";

type EventsListItems = {
    day: string;
    explanation: string;
}

type EventsProps = {
    eventsList: EventsListItems[];
}

export const Events = ({ eventsList }: EventsProps) => {
    const navigate = useNavigate();
    const onClickToEvents = () => {
        navigate("/events");
    }

    return (
        <Wrapper>
            <Title title={"Events"} />
            <EventsList items={eventsList} />
            <ButtonWrapper>
                <Button text={"イベント一覧"} onClick={onClickToEvents} />
            </ButtonWrapper>
        </Wrapper>
    );
}
