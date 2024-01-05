import axios from 'axios';
const url = 'http://localhost:5000/flashcards';

const getAll = async (setFlashcards) => {
  axios
    .get(url)
    .then((res) => {
      setFlashcards(res.data);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
};

const saveCard = async (setFlashcards, newFlashcard) => {
  axios
    .post(url, newFlashcard)
    .then((res) => {
      console.log('card saved: ', res.data);
      getAll(setFlashcards);
    })
    .catch((err) => {
      console.error('Error saving data:', err);
    });
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
