import axios from 'axios';

axios.defaults.baseURL = 'https://protest-backend.goit.global';

export async function getTechQuestion() {
  const { data } = await axios.get(`/qa-test/tech`);
  return data;
}
export async function getTheoryQuestion() {
  const { data } = await axios.get(`/qa-test/theory`);
  return data;
}

export async function getTechResult(results) {
  const result = await axios.post(`/qa-test/tech-results`, results);
  return result;
}

export async function getTheoryResults(results) {
  const result = await axios.post(`/qa-test/theory-results`, results);
}
