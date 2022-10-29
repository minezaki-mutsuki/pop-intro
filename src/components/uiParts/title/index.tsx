import { TitleText } from "./style";

type TitleProps = {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return (
        <TitleText>{title}</TitleText>
    );
}
