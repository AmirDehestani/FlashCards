import '../styles/App.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Cards from '../components/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const getAll = async () => {
    try {
      axios.get('http://localhost:5000/flashcards').then((res) => {
        setFlashcards(res.data);
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  const saveCard = async () => {
    try {
      axios
        .post('http://localhost:5000/flashcards', newFlashcard)
        .then((res) => {
          console.log('card saved: ', res.data);
          getAll();
        });
    } catch (err) {
      console.error('Error saving data:', err);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  // State to store form data
  const [newFlashcard, setNewFlashcard] = useState({
    term: '',
    definition: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveCard();
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
        <Cards flashcards={flashcards} />
      </div>
    </>
  );
};

export default App;
