"use client";

import { useState, useEffect } from "react";

const AssignmentButton = ({ characterId }) => {
  const [locationName, setLocationName] = useState("");
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    setLocations(savedLocations);
  }, []);

  const handleAssign = () => {
    if (!locationName) {
      setError("Location name is required.");
      return;
    }

    const locationIndex = locations.findIndex(
      (location) => location.name === locationName
    );

    if (locationIndex !== -1) {
      const location = locations[locationIndex];
      if (location.characters.includes(characterId)) {
        setError("Character is already assigned to this location.");
        return;
      }

      const updatedLocations = [...locations];
      updatedLocations[locationIndex].characters.push(characterId);
      setLocations(updatedLocations);
      localStorage.setItem("locations", JSON.stringify(updatedLocations));
    } else {
      const newLocations = [
        ...locations,
        { name: locationName, characters: [characterId] },
      ];
      setLocations(newLocations);
      localStorage.setItem("locations", JSON.stringify(newLocations));
    }

    setLocationName("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-xl font-semibold mb-2">Assign Character</h2>
      <input
        type="text"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        placeholder="Enter location name"
        className="border border-gray-300 rounded p-2 mb-2 w-full max-w-xs"
      />
      <button
        onClick={handleAssign}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Assign
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AssignmentButton;
