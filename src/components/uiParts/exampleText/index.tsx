import { StyledText } from "./style";

type ExampleTextProps = {
    text: string;
}

export const ExampleText = ({ text }: ExampleTextProps) => {
    return (
        <StyledText>{text}</StyledText>
    );
}
