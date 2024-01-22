import axios from 'axios';
const url = 'http://localhost:5000/flashcards';

const getAll = async () => {
  return axios.get(url).then((res) => res.data);
};

const saveCard = async (newFlashcard) => {
  return axios.post(url, newFlashcard).then((res) => getAll());
};

const deleteCard = async (id) => {
  return axios.delete(`${url}/${id}`).then((res) => getAll());
};

const apiServices = { getAll, saveCard, deleteCard };
export default apiServices;
