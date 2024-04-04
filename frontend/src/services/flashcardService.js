import axios from 'axios';
const url = 'http://localhost:5000/flashcards';

const getAll = () => {
  return axios.get(url).then((res) => res.data);
};

const saveCard = (newFlashcard) => {
  return axios.post(url, newFlashcard).then((res) => getAll());
};

const deleteCard = (id) => {
  return axios.delete(`${url}/${id}`).then((res) => getAll());
};

const updateCard = (id, updatedCard) => {
  return axios.put(`${url}/${id}`, updatedCard).then((res) => getAll());
};

const flashcardService = { getAll, saveCard, deleteCard, updateCard };
export default flashcardService;
