import React, { useState } from 'react';

import Button from './components/Button';
import Sidey from './components/Sidey';
import System from './components/System';
import SystemSearch from './components/SystemSearch';
import RouteDistance from './components/RouteDistance';

import optimize from './optimizer';

import './App.css';

const App = () => {
  const [origin, setOrigin] = useState();
  const [destinations, setDestinations] = useState([]);
  const [mode, setMode] = useState('initial');

  const addDestination = destination => setDestinations([...destinations, destination]);
  const chooseView = () => {
    if (origin) {
      return destinations.length ? 'showTrip' : 'showOrigin';
    } else {
      return 'initial';
    }
  };

  const AppView = ({ children }) => <div className="App">{children}</div>;
  const InitialView = () => <AppView>
    <Sidey />
    <Button onClick={() => setMode('chooseOrigin')}>Set Origin System</Button>
  </AppView>;
  const OriginPicker = () => <AppView>
    <SystemSearch
      onCancel={() => setMode(chooseView())}
      onSystemChosen={system => {
        setOrigin(system);
        setMode(destinations.length ? 'showTrip' : 'showOrigin');
      }}
    />
  </AppView>;
  const OriginView = () => <AppView>
    <System {...origin} isOrigin={true} />
    <Button onClick={() => setMode('addStop')}>Add Stop</Button>
  </AppView>
  const StopPicker = () => <AppView>
    <SystemSearch
      onCancel={() => setMode(chooseView())}
      onSystemChosen={system => {
        addDestination(system);
        setMode('showTrip');
      }}
    />
  </AppView>;
  const TripView = () => {
    const { distance, route } = optimize(origin, destinations);
    return <AppView>
      <RouteDistance distance={distance} />
      {route.map((route, index) => <System
        key={`hop-${index}`}
        {...route}
      />)}
      <Button onClick={() => setMode('addStop')}>Add Stop</Button>
    </AppView>;
  };

  switch (mode) {
    case 'chooseOrigin':
      return <OriginPicker />;
    case 'showOrigin':
      return <OriginView />;
    case 'addStop':
      return <StopPicker />;
    case 'showTrip':
      return <TripView />;
    default:
      return <InitialView />;
  }
};

export default App;
