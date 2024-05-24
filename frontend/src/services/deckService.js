import axios from 'axios';
const url = 'http://localhost:5000/decks';

const getAll = () => {
  return axios.get(url).then((res) => res.data);
};

const getAllCards = (id) => {
  return axios.get(`${url}/${id}/cards`).then((res) => res.data);
};

const createDeck = (name) => {
  return axios.post(url, name).then((res) => getAll());
};

const deleteDeck = (id) => {
  return axios.delete(`${url}/${id}`).then((res) => getAll());
};

const updateDeck = (id, updatedDeck) => {
  return axios.put(`${url}/${id}`, updatedDeck).then((res) => getAll());
};

const deckService = { getAll, getAllCards, createDeck, deleteDeck, updateDeck };
export default deckService;
