import '../styles/App.css';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Cards from '../components/Cards';
import { useState } from 'react';

const App = () => {
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
        <Form flashcards={flashcards} setFlashcards={setFlashcards} />
        <Cards flashcards={flashcards} />
      </div>
    </>
  );
};

export default App;
