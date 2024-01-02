import '../styles/Card.css';

const Card = ({ flashcard }) => {
  return (
    <div className="card">
      <div className="term">{flashcard.term}</div>
      <div className="definition">{flashcard.definition}</div>
    </div>
  );
};

export default Card;
