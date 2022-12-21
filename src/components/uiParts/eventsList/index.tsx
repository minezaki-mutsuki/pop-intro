import { DayText, ExplanationText, ListWrapper, Wrapper } from "./style";

type EventsListItems = {
    title: string;
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
                    <DayText>{item.title}</DayText>
                    <ExplanationText>{item.explanation}</ExplanationText>
                </Wrapper>
            ))}
        </ListWrapper>
    );
}
