import { DayText, ExplanationText, ListWrapper, Wrapper } from "./style";

type EventsListItems = {
    day: string;
    explanation: string;
}

type EventsListProps = {
    items: EventsListItems[];
}

export const EventsList = ({ items }: EventsListProps) => {
    return (
        <ListWrapper>
            {items.map((item, index) => (
                <Wrapper key={index}>
                    <DayText>{item.day}</DayText>
                    <ExplanationText>{item.explanation}</ExplanationText>
                </Wrapper>
            ))}
        </ListWrapper>
    );
}
