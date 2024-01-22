import '../styles/App.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Cards from '../components/Cards';
import { useEffect, useState } from 'react';
import apiServices from '../services/api';

const App = () => {
  // API services
  const { getAll, saveCard, deleteCard } = apiServices;

  // Application state
  // State to store all cards
  const [flashcards, setFlashcards] = useState([]);
  // State to store form data
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
  });

  // Handlers
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    saveCard(newFlashcard)
      .then((res) => {
        setFlashcards(res);
      })
      .catch((err) => console.log('error saving data: ', err));
    setNewFlashcard({ term: '', definition: '' });
  };
  const handleDelete = (id) => {
    deleteCard(id)
      .then((res) => {
        setFlashcards(res);
      })
      .catch((err) => console.log('error deleting data: ', err));
  };

  useEffect(() => {
    getAll()
      .then((res) => setFlashcards(res))
      .catch((err) => console.log('error fetching data: ', err));
  }, [getAll]);

  return (
    <>
      <div className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </div>
      <div className="main">
        <Form
          newFlashcard={newFlashcard}
          setNewFlashcard={setNewFlashcard}
          handleSubmit={handleSubmit}
        />
        <Cards flashcards={flashcards} deleteHandler={handleDelete} />
      </div>
    </>
  );
};

export default App;
