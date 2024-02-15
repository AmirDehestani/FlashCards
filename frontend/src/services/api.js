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

const updateCard = async (id, updatedCard) => {
  return axios.put(`${url}/${id}`, updatedCard).then((res) => getAll());
};

const apiServices = { getAll, saveCard, deleteCard, updateCard };
export default apiServices;
