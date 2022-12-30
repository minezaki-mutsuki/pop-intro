import React from 'react';
import { EventsPage } from './components/pages/events';
import { LivePage } from './components/pages/live';
import { QandAPage } from './components/pages/qAndA';
import { TopPage } from './components/pages/top';

const App: React.FC = () => {

  return(
    <>
    <TopPage />
    <EventsPage />
    <LivePage />
    <QandAPage />
    </>
  );
};

export default App;
