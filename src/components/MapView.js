import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import PinPopup from './PinPopup';

// Custom pin icon
const pinIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41],
});

const MapNavigator = ({ pinToNavigate, setPinLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (pinToNavigate) {
      const { lat, lng } = pinToNavigate;
      setPinLocation({ lat, lng });
      map.setView([lat, lng], 10, { animate: true });
    }
  }, [pinToNavigate, map, setPinLocation]);

  return null;
};

const MapView = ({ addPin, pinToNavigate }) => {
  const [pinLocation, setPinLocation] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const MapClickHandler = () => {
    useMapEvent('click', (event) => {
      setPinLocation(event.latlng);
      setShowPopup(true); // Show popup on map click
      console.log('Pin set at:', event.latlng);
    });
    return null;
  };

  const handlePinSave = (pinData) => {
    addPin(pinData); // Save pin
    setShowPopup(false); // Hide popup after saving
    setPinLocation(null); // Optionally reset pin location
  };

  return (
    <MapContainer center={[20, 77]} zoom={5} className="h-screen w-full" id="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pinToNavigate && (
        <MapNavigator pinToNavigate={pinToNavigate} setPinLocation={setPinLocation} />
      )}
      <MapClickHandler />
      {pinLocation && showPopup && (
        <Marker position={pinLocation} icon={pinIcon}>
          <Popup>
            <PinPopup location={pinLocation} onSave={handlePinSave} />
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapView;
