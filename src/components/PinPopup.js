import { useEffect, useState } from 'react';

const fetchAddress = async (lat, lng) => {
  const API_KEY = '40e1b2ca9379439289de3b0cc907a481';

  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`
    );

    if (!response.ok) throw new Error('Failed to fetch address.');

    const data = await response.json();
    const address = data.results[0]?.formatted || 'Address not found';
    return address;
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Error fetching address';
  }
};

const PinPopup = ({ location, onSave }) => {
  const [remark, setRemark] = useState('');
  const [address, setAddress] = useState('Fetching address...');

  useEffect(() => {
    const getAddress = async () => {
      const fetchedAddress = await fetchAddress(location.lat, location.lng);
      setAddress(fetchedAddress);
    };
    getAddress();
  }, [location]);

  const handleSave = () => {
    const pinData = {
      lat: location.lat,
      lng: location.lng,
      remark,
      address,
    };
    onSave(pinData); // Call the parent function to save and close the popup
  };

  return (
    <div className="popup p-4 bg-white shadow-lg rounded">
      <h3 className="font-bold">Pin Location</h3>
      <p><strong>Coordinates:</strong> {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</p>
      <p><strong>Address:</strong> {address}</p>
      <input
        type="text"
        placeholder="Enter remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button 
        onClick={handleSave} 
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        Save Pin
      </button>
    </div>
  );
};

export default PinPopup;
