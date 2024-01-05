import axios from 'axios';

const getAll = async (setFlashcards) => {
  try {
    axios.get('http://localhost:5000/flashcards').then((res) => {
      setFlashcards(res.data);
    });
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

const saveCard = async (setFlashcards, newFlashcard) => {
  try {
    axios.post('http://localhost:5000/flashcards', newFlashcard).then((res) => {
      console.log('card saved: ', res.data);
      getAll(setFlashcards);
    });
  } catch (err) {
    console.error('Error saving data:', err);
  }
};

const deleteCard = async (setFlashcards, id) => {
  try {
    axios.delete(`http://localhost:5000/flashcards/${id}`).then((res) => {
      console.log('card removed: ', res.data);
      getAll(setFlashcards);
    });
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

const apiServices = { getAll, saveCard, deleteCard };
export default apiServices;
