import axios from "axios";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/character`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
    throw error;
  }
};
