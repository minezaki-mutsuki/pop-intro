import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EventsPage } from './components/pages/events';
import { LivePage } from './components/pages/live';
import { QandAPage } from './components/pages/qAndA';
import { TopPage } from './components/pages/top';

const App: React.FC = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TopPage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/live">
          <LivePage />
        </Route>
        <Route path="/qanda">
          <QandAPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
