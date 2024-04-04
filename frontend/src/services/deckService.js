import axios from 'axios';
const url = 'http://localhost:5000/decks';

const getAll = () => {
  return axios.get(url).then((res) => res.data);
};

const saveDeck = (newDeck) => {
  return axios.post(url, newDeck).then((res) => getAll());
};

const deleteDeck = (id) => {
  return axios.delete(`${url}/${id}`).then((res) => getAll());
};

const updateDeck = (id, updatedDeck) => {
  return axios.put(`${url}/${id}`, updatedDeck).then((res) => getAll());
};

const deckService = { getAll, saveDeck, deleteDeck, updateDeck };
export default deckService;
