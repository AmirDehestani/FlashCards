import Card from './Card';
import '../styles/Cards.css';

const Cards = ({ flashcards, deleteCard }) => {
  return (
    <div className="cards">
      <div className="cards-header">
        <div className="term-header">Term</div>
        <div className="definition-header">Definition</div>
      </div>
      {flashcards.map((flashcard) => (
        <Card
          className="card"
          key={flashcard._id}
          flashcard={flashcard}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default Cards;
