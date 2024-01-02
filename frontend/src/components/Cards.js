const Cards = ({ flashcards }) => {
  return flashcards.map((flashcard) => (
    <div key={flashcard.term}>
      {flashcard.term} --- {flashcard.definition}
    </div>
  ));
};

export default Cards;
