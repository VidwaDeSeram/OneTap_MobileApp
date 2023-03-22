import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/Users`);
  return response.data;
};

export const createUsers = async (todo) => {
  const response = await axios.post(`${API_URL}/Users`, users);
  return response.data;
};
