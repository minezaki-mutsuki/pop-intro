import Data from "../../../data.json"
import { QandALayout } from "./layout";

export const QandAPage = () => {
    const QandA = Data.data.top.QandA;

    return (
        <QandALayout qAndAList={QandA} />
    );
};
