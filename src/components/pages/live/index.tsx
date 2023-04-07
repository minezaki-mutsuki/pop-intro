import Data from "../../../data.json";
import { LiveLayout } from "./layout";

export const LivePage = () => {
  const liveList = Data.data.live;

  return <LiveLayout liveList={liveList} />;
};
