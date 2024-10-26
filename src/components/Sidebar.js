const Sidebar = ({ pins, navigateToPin }) => (
    <div className="w-72 bg-gray-800 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Saved Pins</h2>
      <ul className="space-y-2">
        {pins.map((pin, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 bg-gray-700 rounded hover:bg-gray-600"
            onClick={() => navigateToPin(pin)}
          >
            <p className="text-sm">{pin.remark || 'No remark'}</p>
            <p className="text-xs text-gray-400">{pin.address || 'No address'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Sidebar;
  