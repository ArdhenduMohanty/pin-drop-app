import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar';

function App() {
  const [pins, setPins] = useState(() => {
    const saved = localStorage.getItem('pins');
    return saved ? JSON.parse(saved) : [];
  });

  const [pinToNavigate, setPinToNavigate] = useState(null); // Store pin to na

  const addPin = (newPin) => {
    const updatedPins = [...pins, newPin];
    setPins(updatedPins);
    localStorage.setItem('pins', JSON.stringify(updatedPins));
  };

  const navigateToPin = (pin) => {
    console.log(`Navigating to ${pin.lat}, ${pin.lng}`);
    setPinToNavigate(pin); // Set the selected pin to navigate to
  };

  return (
    <div className="flex">
      <Sidebar pins={pins} navigateToPin={navigateToPin} />
      <div className="flex-1">
        <MapView addPin={addPin} pinToNavigate={pinToNavigate} />
      </div>
    </div>
  );
}

export default App;
