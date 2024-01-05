import '../styles/App.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Cards from '../components/Cards';
import { useEffect, useState } from 'react';
import apiServices from '../services/api';

const App = () => {
  const { getAll, saveCard, deleteCard } = apiServices;

  useEffect(() => {
    getAll(setFlashcards);
  }, []);

  // State to store form data
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveCard(setFlashcards, newFlashcard);
    setNewFlashcard({ term: '', definition: '' });
  };

  // State to store all cards
  const [flashcards, setFlashcards] = useState([]);

  return (
    <>
      <div className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
      <div className="main">
        <Form
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          newFlashcard={newFlashcard}
          setNewFlashcard={setNewFlashcard}
          handleSubmit={handleSubmit}
        />
        <Cards
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          deleteCard={deleteCard}
        />
      </div>
    </>
  );
};

export default App;
