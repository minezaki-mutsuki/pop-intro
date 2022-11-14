import { ExplanationText, ListWrapper, TitleText, Wrapper } from "./style";

type AboutListItems = {
    title: string;
    explanation: string;
}

type AboutListProps = {
    items: AboutListItems[];
}

export const AboutList = ({ items }: AboutListProps) => {
    return (
        <ListWrapper>
            {items.map((item, index) => (
                <Wrapper key={index}>
                    <TitleText>{item.title}</TitleText>
                    <ExplanationText>{item.explanation}</ExplanationText>
                </Wrapper>
            ))}
        </ListWrapper>
    );
}
