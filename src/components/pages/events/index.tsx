import Data from "../../../data.json"
import { EventsLayout } from "./layout";

export const EventsPage = () => {
    const eventsList = Data.data.top.eventsList

    return (
        <EventsLayout eventsList={eventsList} />
    );
};
