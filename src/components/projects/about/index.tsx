import { AboutList } from "../../uiParts/aboutList";
import { Degree } from "../../uiParts/degree";
import { Title } from "../../uiParts/title";
import { DegreeWrapper, FlexWrapper, Wrapper } from "./style";

type AboutListItems = {
    title: string;
    explanation: string;
}

type DegreeItems = {
    title: string;
    left: string;
    right: string;
    degree: number;
};

type AboutProps = {
    aboutList: AboutListItems[];
    degree: DegreeItems[];
}

export const About = ({ aboutList, degree }: AboutProps) => {
    return (
        <Wrapper>
            <Title title={"About"} />
            <AboutList items={aboutList} />
            <FlexWrapper>
                {degree.map((item, index) => (
                    <DegreeWrapper>
                        <Degree key={index} {...item} />
                    </DegreeWrapper>
                ))}
            </FlexWrapper>
        </Wrapper>
    );
}
