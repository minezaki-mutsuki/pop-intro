import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EventsPage } from "./components/pages/events"
import { LivePage } from "./components/pages/live"
import { QandAPage } from "./components/pages/qAndA"
import { TopPage } from "./components/pages/top"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TopPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/live" element={<LivePage />} />
                <Route path="/qanda" element={<QandAPage />} />
                <Route path="*" element={<TopPage />} />
            </Routes>
        </BrowserRouter>
    );
};
