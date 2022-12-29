import { AboutList } from "../../uiParts/aboutList";
import { Degree } from "../../uiParts/degree";
import { Title } from "../../uiParts/title";
import { DegreeWrapper, Wrapper } from "./style";

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
            {degree.map((item, index) => (
                <DegreeWrapper>
                    <Degree key={index} {...item} />
                </DegreeWrapper>
            ))}
        </Wrapper>
    );
}
