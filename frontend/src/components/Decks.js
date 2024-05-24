import Deck from './Deck';
import '../styles/Decks.css';

const Decks = ({ decks }) => {
  return (
    <div className="decks-panel">
      {decks.map((deck) => (
        <Deck deck={deck} key={deck._id} />
      ))}
    </div>
  );
};

export default Decks;
