import Deck from './Deck';
import '../styles/Decks.css';

const Decks = ({ decks }) => {
  return (
    <div className="decks-panel">
      {decks.map((deck) => (
        <Deck deckName={deck.name} key={deck._id} />
      ))}
    </div>
  );
};

export default Decks;
