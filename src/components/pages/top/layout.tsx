import { About } from "../../projects/about";
import { Contact } from "../../projects/contact";
import { Events } from "../../projects/events";
import { Footer } from "../../projects/footer";
import { Header } from "../../projects/header";
import { Live } from "../../projects/live";
import { QandA } from "../../projects/Q&A";
import { Top } from "../../projects/top";
import { Wrapper } from "./style";

type AboutListItems = {
  title: string;
  explanation: string;
};

type DegreeItems = {
  title: string;
  left: string;
  right: string;
  degree: number;
};

type QandAItems = {
  qestion: string;
  answer: string;
};

type EventsListItems = {
  day: string;
  explanation: string;
};

type TopLayoutProps = {
  topProps: string;
  aboutListProps: AboutListItems[];
  degreeProps: DegreeItems[];
  eventsListProps: EventsListItems[];
  qandAProps: QandAItems[];
};

export const TopLayout = ({
  topProps,
  aboutListProps,
  degreeProps,
  eventsListProps,
  qandAProps,
}: TopLayoutProps) => {
  return (
    <Wrapper>
      <Header choice={true} />
      <section id="top">
        <Top text={topProps} />
      </section>
      <section id="about">
        <About aboutList={aboutListProps} degree={degreeProps} />
      </section>
      <section id="events">
        <Events eventsList={eventsListProps} />
      </section>
      <section id="live">
        <Live />
      </section>
      <section id="qanda">
        <QandA QandA={qandAProps} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer choice={true} />
    </Wrapper>
  );
};
