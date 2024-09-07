"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchCharacter = async (id) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    return null;
  }
};

const CharactersByLocation = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [charactersData, setCharactersData] = useState({});

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    setLocations(savedLocations);
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      const fetchCharactersData = async () => {
        const charactersPromises = selectedLocation.characters.map(
          (characterId) => fetchCharacter(characterId)
        );
        const characters = await Promise.all(charactersPromises);
        const charactersMap = characters.reduce((acc, char) => {
          if (char) acc[char.id] = char;
          return acc;
        }, {});
        setCharactersData(charactersMap);
      };
      fetchCharactersData();
    }
  }, [selectedLocation]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Characters By Location
      </h1>
      {locations.length === 0 ? (
        <p className="text-center text-gray-600">No locations available.</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Locations</h2>
            <ul className="list-disc pl-5 space-y-2">
              {locations.map((location, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedLocation(location)}
                  className={`cursor-pointer p-2 rounded-lg transition-colors duration-300 
                  ${
                    selectedLocation?.name === location.name
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-blue-50"
                  }`}
                >
                  {location.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3 mt-6 mb-8 md:mt-0">
            {selectedLocation && (
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">
                  Characters in {selectedLocation.name}
                </h2>
                <ul className="space-y-4">
                  {selectedLocation.characters.map((characterId) => {
                    const character = charactersData[characterId];
                    return character ? (
                      <li
                        key={characterId}
                        className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:bg-gray-50"
                      >
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-20 h-20 object-cover rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-lg">
                            {character.name}
                          </p>
                          <p className="text-gray-600">
                            Species: {character.species}
                          </p>
                        </div>
                      </li>
                    ) : (
                      <li
                        key={characterId}
                        className="p-4 bg-white rounded-lg shadow-md"
                      >
                        Loading...
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharactersByLocation;
