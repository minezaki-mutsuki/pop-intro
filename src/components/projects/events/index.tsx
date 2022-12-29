import { Button } from "../../uiParts/button";
import { EventsList } from "../../uiParts/eventsList";
import { Title } from "../../uiParts/title";
import { ButtonWrapper, Wrapper } from "./style";

type EventsListItems = {
    title: string;
    explanation: string;
}

type EventsProps = {
    eventsList: EventsListItems[];
}

export const Events = ({ eventsList }: EventsProps) => {
    const onClickToEvents = () => {
        console.log("イベント一覧に遷移");
        //TODO : useNavigate使いたい
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
