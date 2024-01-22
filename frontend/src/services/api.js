import axios from 'axios';
const url = 'http://localhost:5000/flashcards';

const getAll = async () => {
  return axios.get(url).then((res) => res.data);
};

const saveCard = async (newFlashcard) => {
  return axios.post(url, newFlashcard).then((res) => getAll());
};

const deleteCard = async (setFlashcards, id) => {
  axios
    .delete(`${url}/${id}`)
    .then((res) => {
      console.log('card removed: ', res.data);
      getAll(setFlashcards);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
};

const apiServices = { getAll, saveCard, deleteCard };
export default apiServices;
