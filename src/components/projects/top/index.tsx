import { TopImg, TopText, Wrapper } from "./style";
import TopPicture  from "./topPicture.jpeg"

type TopProps = {
    text: string;
}

export const Top = ({ text }: TopProps) => {
    return (
        <Wrapper>
            <TopText>{text}</TopText>
            <TopImg src={TopPicture} />
        </Wrapper>
    );
}
