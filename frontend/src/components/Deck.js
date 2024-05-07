import { Link } from 'react-router-dom';
import '../styles/Deck.css';

const Deck = ({ deckName }) => {
  return (
    <Link className="deck" to={'/app'}>
      {deckName}
    </Link>
  );
};

export default Deck;
