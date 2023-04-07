import { TopLayout } from "./layout";
import Data from "../../../data.json";

export const TopPage = () => {
  const topText = Data.data.top.topText;
  const aboutList = Data.data.top.aboutList;
  const degree = Data.data.top.degree;
  const eventsList = Data.data.top.eventsList;
  const QandA = Data.data.top.QandA;

  const newEventsList = eventsList.slice(0, 3);
  const newQandA = QandA.slice(0, 3);

  return (
    <TopLayout
      topProps={topText}
      aboutListProps={aboutList}
      degreeProps={degree}
      eventsListProps={newEventsList}
      qandAProps={newQandA}
    />
  );
};
