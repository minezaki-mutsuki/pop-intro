import { useState } from "react";
import { Atext, Qestion, Qtext, Wrapper } from "./style";
import { IconContext } from "react-icons"
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi"

type QaButtonProps = {
    qestion: string;
    answer: string;
};

export const QaButton = ({ qestion, answer }: QaButtonProps) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const IconOpen = (
        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
            <TfiAngleUp />
        </IconContext.Provider>
    );
    const IconClose = (
        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
            <TfiAngleDown />
        </IconContext.Provider>
    );

    return (
        <Wrapper onClick={() => setIsOpen(!isOpen)}>
             <Qestion>
                <Qtext>{qestion}</Qtext>
                { isOpen ? IconOpen : IconClose }
              </Qestion>
             { isOpen && <Atext>{answer}</Atext> }
        </Wrapper>
    );
};
