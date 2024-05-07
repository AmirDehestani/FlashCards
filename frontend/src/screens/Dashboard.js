import '../styles/Dashboard.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import deckService from '../services/deckService';
import Decks from '../components/Decks';

const Dashboard = () => {
  // Deck services
  const { getAll, createDeck, deleteDeck, updateDeck } = deckService;

  // State
  const [decks, setDecks] = useState([]);

  // Handlers
  const createDeckHandler = (e) => {
    e.preventDefault();
    createDeck({ name: e.target[0].value })
      .then((res) => {
        setDecks(res);
      })
      .catch((err) => console.log('error saving data: ', err));
    e.target.reset();
  };

  useEffect(() => {
    getAll()
      .then((res) => setDecks(res))
      .catch((err) => console.log('error fetching data: ', err));
  }, [getAll]);

  return (
    <>
      <Navbar />
      <div className="main">
        <form className="create-deck-form" onSubmit={createDeckHandler}>
          <h2>Create a deck</h2>
          <div className="create-deck-input">
            <label htmlFor="deck-name">Name</label>
            <input type="text" name="deck-name" id="deck-name" />
          </div>
          <div className="create-deck-input">
            <input type="submit" value="Create" className="save-button" />
          </div>
        </form>
        <Decks decks={decks} />
      </div>
    </>
  );
};

export default Dashboard;
