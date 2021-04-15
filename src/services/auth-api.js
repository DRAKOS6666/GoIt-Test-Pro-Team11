import axios from 'axios';

axios.defaults.baseURL = 'https://protest-backend.goit.global';

export async function getCurrentUser(userData) {
  const { data } = await axios.get('/user');
  return data;
}

export async function refreshToken(sid) {
  const { data } = await axios.post('/auth/refresh', sid);
  return data;
}

export async function loginUser(userData) {
  const { data } = await axios.post('/auth/login', userData);
  return data;
}

export async function logoutUser() {
  const { data } = await axios.post('/auth/logout');
  return data;
}

export async function registerUser(userData) {
  const { data } = await axios.post('/auth/register', userData);
  return data;
}
