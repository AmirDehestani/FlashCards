import Card from './Card';
import '../styles/Cards.css';

const Cards = ({ flashcards }) => {
  return (
    <div className="cards">
      <div className="cards-header">
        <div className="term-header">Term</div>
        <div className="definition-header">Definition</div>
      </div>
      {flashcards.map((flashcard) => (
        <Card className="card" key={flashcard._id} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default Cards;
