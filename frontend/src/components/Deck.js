import { Link } from 'react-router-dom';
import '../styles/Deck.css';

const Deck = ({ deck }) => {
  return (
    <Link className="deck" to={`/app/${deck._id}`}>
      {deck.name}
    </Link>
  );
};

export default Deck;
