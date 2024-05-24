import '../styles/App.css';
import Form from '../components/Form';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import apiServices from '../services/flashcardService';
import deckService from '../services/deckService';
import { useParams } from 'react-router-dom';

const App = () => {
  const { deckId } = useParams();

  // API services
  const { getAll, saveCard, deleteCard, updateCard } = apiServices;
  const { getAllCards } = deckService;

  // Application state
  // State to store all cards
  const [flashcards, setFlashcards] = useState([]);
  // State to store form data
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
    deckId: deckId,
  });

  // Handlers
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    saveCard(newFlashcard)
      .then((res) => {
        setFlashcards(res);
      })
      .catch((err) => console.log('error saving data: ', err));
    setNewFlashcard({ term: '', definition: '' });
  };
  // Card delete handler
  const handleDelete = (id) => {
    deleteCard(id)
      .then((res) => {
        setFlashcards(res);
      })
      .catch((err) => console.log('error deleting data: ', err));
  };
  // Card update handler
  const handleUpdate = (id, updatedCard) => {
    updateCard(id, updatedCard)
      .then((res) => {
        setFlashcards(res);
      })
      .catch((err) => console.log('error updating data: ', err));
  };

  useEffect(() => {
    getAllCards(deckId)
      .then((res) => setFlashcards(res))
      .catch((err) => console.log('error fetching data: ', err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="main">
        <Form
          newFlashcard={newFlashcard}
          setNewFlashcard={setNewFlashcard}
          handleSubmit={handleSubmit}
        />
        <Cards
          flashcards={flashcards}
          deleteHandler={handleDelete}
          updateHandler={handleUpdate}
        />
      </div>
    </>
  );
};

export default App;
