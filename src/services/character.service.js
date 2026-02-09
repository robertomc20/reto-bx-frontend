import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getRandomCharacter = async (category) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/characters/random?category=${category}`,
  );
  return response.data;
};

export const voteCharacter = async ({ characterId, vote }) => {
  const response = await axios.post(`${API_BASE_URL}/api/votes`, {
    characterId,
    vote, // 'like' | 'dislike'
  });
  return response.data;
};
