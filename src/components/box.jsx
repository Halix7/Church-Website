import React, { useState } from "react";

const Box = ({ image, name, details, address }) => {
  const [showAddress, setShowAddress] = useState(false);

  const handleMouseEnter = () => {
    setShowAddress(true);
  };

  const handleMouseLeave = () => {
    setShowAddress(false);
  };

  const handleButtonClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/place/${encodedAddress}`);
  };

  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showAddress && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="mb-2">{details}</p>
            <p className="mb-2">{address}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleButtonClick}
            >
              View on Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Box;