import { useEffect, useRef, useState } from "react";
import { Scale, Separator, StyledIcon, StyledText, TitleText, Wrapper } from "./style";

type DegreeProps = {
    title: string;
    left: string;
    right: string;
    degree: number;
};

export const Degree = ({ title, left, right, degree }: DegreeProps) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [textWidth, setTextWidth] = useState<number>(10);
    const [isDegree, setIsDegree] = useState<number>(0);
    useEffect(() => {
        if (textRef.current) {
            const getWidth = textRef.current.clientWidth;
            setTextWidth(getWidth);
        };
        if (degree === 1) {
            setIsDegree(0);
        } else if (degree === 2) {
            setIsDegree(50);
        } else if (degree === 3) {
            setIsDegree(100);
        } else if (degree === 4) {
            setIsDegree(150);
        } else {
            setIsDegree(200);
        };
    },[textRef, degree]);

    return (
        <>
            <TitleText>{title}</TitleText>
            <Wrapper>
                <StyledText ref={textRef}>{left}</StyledText>
                <StyledIcon degree={isDegree} textWidth={textWidth}>★</StyledIcon>
                <Scale position={1} textWidth={textWidth}>|</Scale>
                <Scale position={2} textWidth={textWidth}>|</Scale>
                <Scale position={3} textWidth={textWidth}>|</Scale>
                <Scale position={4} textWidth={textWidth}>|</Scale>
                <Scale position={5} textWidth={textWidth}>|</Scale>
                <Separator />
                <StyledText>{right}</StyledText>
            </Wrapper>
        </>
    );
};
